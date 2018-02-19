import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';

import {
  selectCity,
  fetchStreetsIfNeeded,
  invalidateCity,
} from '../actions';
import Picker from '../components/Picker';
import Streets from '../components/Streets';

class AsyncStreets extends Component {
  static defaultProps = {
    lastUpdated: null,
  };

  static propTypes = {
    selectedCity: PropTypes.string.isRequired,
    streets: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { dispatch, selectedCity } = this.props;
    dispatch(fetchStreetsIfNeeded(selectedCity));
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedCity !== prevProps.selectedCity) {
      const { dispatch, selectedCity } = this.props;
      dispatch(fetchStreetsIfNeeded(selectedCity));
    }
  }

  handleChange = (nextCity) => {
    const { dispatch } = this.props;
    dispatch(selectCity(nextCity));
    dispatch(fetchStreetsIfNeeded(nextCity));
  };

  handleRefreshClick = (e) => {
    e.preventDefault();
    const { dispatch, selectedCity } = this.props;
    dispatch(invalidateCity(selectedCity));
    dispatch(fetchStreetsIfNeeded(selectedCity));
  };

  render() {
    const {
      selectedCity, streets, isFetching, lastUpdated,
    } = this.props;
    return (
      <div>
        <Picker
          value={selectedCity}
          onChange={this.handleChange}
          options={['13', '23', '2']}
        />
        <p>
          {lastUpdated && (
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{' '}
            </span>
          )}
          {!isFetching && (
            <Button raised onClick={this.handleRefreshClick}>Refresh</Button>
          )}
        </p>
        {isFetching && streets.length === 0 && <h2>Loading...</h2>}
        {!isFetching && streets.length === 0 && <h2>Empty.</h2>}
        {streets.length > 0 && (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Streets streets={streets} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ selectedCity, streetsByCity }) => {
  const { isFetching, lastUpdated, items: streets } = streetsByCity[
    selectedCity
  ] || { isFetching: true, items: [] };
  return {
    selectedCity,
    streets,
    isFetching,
    lastUpdated,
  };
};

export default connect(mapStateToProps)(AsyncStreets);
