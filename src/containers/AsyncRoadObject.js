import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';

import {
  selectRoadObject,
  fetchRoadObjectIfNeeded,
  invalidateRoadObject,
} from '../actions';
import Picker from '../components/Picker';
import RoadObject from '../components/RoadObject';

class AsyncRoadObject extends Component {
  static defaultProps = {
    lastUpdated: null,
  };

  static propTypes = {
    selectedRoadObject: PropTypes.string.isRequired,
    roadObject: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { dispatch, selectedRoadObject } = this.props;
    dispatch(fetchRoadObjectIfNeeded(selectedRoadObject));
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedRoadObject !== prevProps.selectedRoadObject) {
      const { dispatch, selectedRoadObject } = this.props;
      dispatch(fetchRoadObjectIfNeeded(selectedRoadObject));
    }
  }

  handleChange = (nextRoadObject) => {
    const { dispatch } = this.props;
    dispatch(selectRoadObject(nextRoadObject));
    dispatch(fetchRoadObjectIfNeeded(nextRoadObject));
  };

  handleRefreshClick = (e) => {
    e.preventDefault();
    const { dispatch, selectedRoadObject } = this.props;
    dispatch(invalidateRoadObject(selectedRoadObject));
    dispatch(fetchRoadObjectIfNeeded(selectedRoadObject));
  };

  render() {
    const {
      selectedRoadObject, roadObject, isFetching, lastUpdated,
    } = this.props;
    return (
      <div>
        <Picker
          value={selectedRoadObject}
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
        {isFetching && roadObject.length === 0 && <h2>Loading...</h2>}
        {!isFetching && roadObject.length === 0 && <h2>Empty.</h2>}
        {roadObject.length > 0 && (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <RoadObject roadObject={roadObject} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ selectedRoadObject, roadObjectById }) => {
  const { isFetching, lastUpdated, items: roadObject } = roadObjectById[
    selectedRoadObject
  ] || { isFetching: true, items: [] };
  return {
    selectedRoadObject,
    roadObject,
    isFetching,
    lastUpdated,
  };
};

export default connect(mapStateToProps)(AsyncRoadObject);
