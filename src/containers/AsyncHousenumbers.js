import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';

import { selectStreet, fetchHousenumbersIfNeeded, invalidateStreet } from '../actions';
import Picker from '../components/Picker';
import Housenumbers from '../components/Housenumbers';

class AsyncHousenumbers extends Component {
  static defaultProps = {
    lastUpdated: null,
  };

  static propTypes = {
    selectedStreet: PropTypes.string.isRequired,
    housenumbers: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { dispatch, selectedStreet } = this.props;
    dispatch(fetchHousenumbersIfNeeded(selectedStreet));
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedStreet !== prevProps.selectedStreet) {
      const { dispatch, selectedStreet } = this.props;
      dispatch(fetchHousenumbersIfNeeded(selectedStreet));
    }
  }

  handleChange = (nextStreet) => {
    const { dispatch } = this.props;
    dispatch(selectStreet(nextStreet));
    dispatch(fetchHousenumbersIfNeeded(nextStreet));
  };

  handleRefreshClick = (e) => {
    e.preventDefault();
    const { dispatch, selectedStreet } = this.props;
    dispatch(invalidateStreet(selectedStreet));
    dispatch(fetchHousenumbersIfNeeded(selectedStreet));
  };

  render() {
    const {
      selectedStreet, housenumbers, isFetching, lastUpdated,
    } = this.props;
    return (
      <div>
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
        {isFetching && housenumbers.length === 0 && <h2>Loading...</h2>}
        {!isFetching && housenumbers.length === 0 && <h2>Empty.</h2>}
        {housenumbers.length > 0 && (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Housenumbers housenumbers={housenumbers} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ selectedStreet, housenumbersByStreet }) => {
  const { isFetching, lastUpdated, items: housenumbers } = housenumbersByStreet[
    selectedStreet
  ] || { isFetching: true, items: [] };
  return {
    selectedStreet,
    housenumbers,
    isFetching,
    lastUpdated,
  };
};

export default connect(mapStateToProps)(AsyncHousenumbers);
