import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';

import {
  selectStreet,
  fetchRoadObjectsIfNeeded,
  invalidateStreet,
} from '../actions';
import Picker from '../components/Picker';
import RoadObjects from '../components/RoadObjects';

class AsyncRoadObjects extends Component {
  static defaultProps = {
    lastUpdated: null,
  };

  static propTypes = {
    selectedStreet: PropTypes.string.isRequired,
    roadObjects: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { dispatch, selectedStreet } = this.props;
    dispatch(fetchRoadObjectsIfNeeded(selectedStreet));
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedStreet !== prevProps.selectedStreet) {
      const { dispatch, selectedStreet } = this.props;
      dispatch(fetchRoadObjectsIfNeeded(selectedStreet));
    }
  }

  handleChange = (nextStreet) => {
    const { dispatch } = this.props;
    dispatch(selectStreet(nextStreet));
    dispatch(fetchRoadObjectsIfNeeded(nextStreet));
  };

  handleRefreshClick = (e) => {
    e.preventDefault();
    const { dispatch, selectedStreet } = this.props;
    dispatch(invalidateStreet(selectedStreet));
    dispatch(fetchRoadObjectsIfNeeded(selectedStreet));
  };

  render() {
    const {
      selectedStreet,
      roadObjects,
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
        {isFetching && roadObjects.length === 0 && <h2>Loading...</h2>}
        {!isFetching && roadObjects.length === 0 && <h2>Empty.</h2>}
        {roadObjects.length > 0 && (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <RoadObjects roadObjects={roadObjects} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ selectedStreet, roadObjectsByStreet }) => {
  const { isFetching, lastUpdated, items: roadObjects } = roadObjectsByStreet[
    selectedStreet
  ] || { isFetching: true, items: [] };
  return {
    selectedStreet,
    roadObjects,
    isFetching,
    lastUpdated,
  };
};

export default connect(mapStateToProps)(AsyncRoadObjects);
