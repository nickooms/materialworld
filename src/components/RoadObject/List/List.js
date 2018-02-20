import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MuiList from 'material-ui/List';

import Item from './Item';

const List = props => (
  <MuiList component="nav">
    {props.items.map(({ id, kind }) => (
      <Link key={id} to={`/object/${id}`}>
        <Item id={id} kind={kind} />
      </Link>
    ))}
  </MuiList>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    kind: PropTypes.number.isRequired,
  })).isRequired,
};

export default List;
