import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';

import { selectRegion, fetchCitiesIfNeeded, invalidateRegion } from '../actions';
import Picker from '../components/Picker';
import Cities from '../components/Cities';

class AsyncCities extends Component {
  static defaultProps = {
    lastUpdated: null,
  };

  static propTypes = {
    selectedRegion: PropTypes.string.isRequired,
    cities: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { dispatch, selectedRegion } = this.props;
    dispatch(fetchCitiesIfNeeded(selectedRegion));
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedRegion !== prevProps.selectedRegion) {
      const { dispatch, selectedRegion } = this.props;
      dispatch(fetchCitiesIfNeeded(selectedRegion));
    }
  }

  handleChange = (nextRegion) => {
    const { dispatch } = this.props;
    dispatch(selectRegion(nextRegion));
    dispatch(fetchCitiesIfNeeded(nextRegion));
  };

  handleRefreshClick = (e) => {
    e.preventDefault();
    const { dispatch, selectedRegion } = this.props;
    dispatch(invalidateRegion(selectedRegion));
    dispatch(fetchCitiesIfNeeded(selectedRegion));
  };

  render() {
    const {
      selectedRegion, cities, isFetching, lastUpdated,
    } = this.props;
    return (
      <div>
        <Picker
          value={selectedRegion}
          onChange={this.handleChange}
          options={['1', '2']}
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
        {isFetching && cities.length === 0 && <h2>Loading...</h2>}
        {!isFetching && cities.length === 0 && <h2>Empty.</h2>}
        {cities.length > 0 && (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Cities cities={cities} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ selectedRegion, citiesByRegion }) => {
  const { isFetching, lastUpdated, items: cities } = citiesByRegion[
    selectedRegion
  ] || { isFetching: true, items: [] };
  return {
    selectedRegion,
    cities,
    isFetching,
    lastUpdated,
  };
};

export default connect(mapStateToProps)(AsyncCities);
