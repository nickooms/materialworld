import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';

import {
  selectStreet,
  fetchRoadSegmentsIfNeeded,
  invalidateStreet,
} from '../actions';
import Picker from '../components/Picker';
import RoadSegments from '../components/RoadSegments';

class AsyncRoadSegments extends Component {
  static defaultProps = {
    lastUpdated: null,
  };

  static propTypes = {
    selectedStreet: PropTypes.string.isRequired,
    roadSegments: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { dispatch, selectedStreet } = this.props;
    dispatch(fetchRoadSegmentsIfNeeded(selectedStreet));
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedStreet !== prevProps.selectedStreet) {
      const { dispatch, selectedStreet } = this.props;
      dispatch(fetchRoadSegmentsIfNeeded(selectedStreet));
    }
  }

  handleChange = (nextStreet) => {
    const { dispatch } = this.props;
    dispatch(selectStreet(nextStreet));
    dispatch(fetchRoadSegmentsIfNeeded(nextStreet));
  };

  handleRefreshClick = (e) => {
    e.preventDefault();
    const { dispatch, selectedStreet } = this.props;
    dispatch(invalidateStreet(selectedStreet));
    dispatch(fetchRoadSegmentsIfNeeded(selectedStreet));
  };

  render() {
    const {
      selectedStreet,
      roadSegments,
      isFetching,
      lastUpdated,
    } = this.props;
    return (
      <div>
        <br />
        <br />
        <Picker
          value={selectedStreet}
          onChange={this.handleChange}
          options={['7338', '5514']}
        />
        <p>
          {lastUpdated && (
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{' '}
            </span>
          )}
          {!isFetching && (
            <Button raised onClick={this.handleRefreshClick}>
              Refresh
            </Button>
          )}
        </p>
        {isFetching && roadSegments.length === 0 && <h2>Loading...</h2>}
        {!isFetching && roadSegments.length === 0 && <h2>Empty.</h2>}
        {roadSegments.length > 0 && (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <RoadSegments roadSegments={roadSegments} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ selectedStreet, roadSegmentsByStreet }) => {
  const { isFetching, lastUpdated, items: roadSegments } = roadSegmentsByStreet[
    selectedStreet
  ] || { isFetching: true, items: [] };
  return {
    selectedStreet,
    roadSegments,
    isFetching,
    lastUpdated,
  };
};

export default connect(mapStateToProps)(AsyncRoadSegments);
