import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ImageIcon from 'material-ui-icons/Image';

const Item = ({ id, kind }) => (
  <ListItem button key={id}>
    <Avatar>
      <ImageIcon />
    </Avatar>
    <ListItemText primary={id} secondary={kind} />
  </ListItem>
);

Item.propTypes = {
  id: PropTypes.number.isRequired,
  kind: PropTypes.number.isRequired,
};

export default Item;
