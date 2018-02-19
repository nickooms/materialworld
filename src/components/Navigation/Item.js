import React from 'react';
import PropTypes from 'prop-types';

import SubMenu from '../SubMenu';
import MenuItem from '../MenuItem';

const Item = props => (
  props.children && props.children.length !== 0
    ? <SubMenu name={props.name}>{props.children}</SubMenu>
    : <MenuItem path={props.path} name={props.name} />
);

Item.defaultProps = {
  path: null,
  children: null,
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string,
  children: PropTypes.node,
};

export default Item;
