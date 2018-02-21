import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';

import {
  selectRoadSegment,
  fetchRoadSegmentIfNeeded,
  invalidateRoadSegment,
} from '../actions';
import Picker from '../components/Picker';
import RoadSegment from '../components/RoadSegment';

class AsyncRoadSegment extends Component {
  static defaultProps = {
    lastUpdated: null,
  };

  static propTypes = {
    selectedRoadSegment: PropTypes.string.isRequired,
    roadSegment: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { dispatch, selectedRoadSegment } = this.props;
    dispatch(fetchRoadSegmentIfNeeded(selectedRoadSegment));
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedRoadSegment !== prevProps.selectedRoadSegment) {
      const { dispatch, selectedRoadSegment } = this.props;
      dispatch(fetchRoadSegmentIfNeeded(selectedRoadSegment));
    }
  }

  handleChange = (nextRoadSegment) => {
    const { dispatch } = this.props;
    dispatch(selectRoadSegment(nextRoadSegment));
    dispatch(fetchRoadSegmentIfNeeded(nextRoadSegment));
  };

  handleRefreshClick = (e) => {
    e.preventDefault();
    const { dispatch, selectedRoadSegment } = this.props;
    dispatch(invalidateRoadSegment(selectedRoadSegment));
    dispatch(fetchRoadSegmentIfNeeded(selectedRoadSegment));
  };

  render() {
    const {
      selectedRoadSegment,
      roadSegment,
      isFetching,
      lastUpdated,
    } = this.props;
    return (
      <div>
        <Picker
          value={selectedRoadSegment}
          onChange={this.handleChange}
          options={['53835939']}
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
        {isFetching && roadSegment.length === 0 && <h2>Loading...</h2>}
        {!isFetching && roadSegment.length === 0 && <h2>Empty.</h2>}
        {roadSegment.length > 0 && (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <RoadSegment roadSegment={roadSegment} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ selectedRoadSegment, roadSegmentById }) => {
  const { isFetching, lastUpdated, items: roadSegment } = roadSegmentById[
    selectedRoadSegment
  ] || { isFetching: true, items: [] };
  return {
    selectedRoadSegment,
    roadSegment,
    isFetching,
    lastUpdated,
  };
};

export default connect(mapStateToProps)(AsyncRoadSegment);
