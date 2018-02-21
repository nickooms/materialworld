import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MuiList from 'material-ui/List';

import Item from './Item';

const List = props => (
  <MuiList component="nav">
    {props.items.map(({ id, status }) => (
      <Link key={id} to={`/object/${id}`}>
        <Item id={id} status={status} />
      </Link>
    ))}
  </MuiList>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.number.isRequired,
  })).isRequired,
};

export default List;
