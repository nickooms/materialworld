import React from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { NavLink } from 'react-router-dom';
import StarBorder from 'material-ui-icons/StarBorder';

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

const SubMenuItem = ({ classes, to, name }) => (
  <NavLink exact to={to} key={to}>
    <ListItem button className={classes.nested}>
      <ListItemIcon>
        <StarBorder />
      </ListItemIcon>
      <ListItemText inset primary={name} />
    </ListItem>
  </NavLink>
);

SubMenuItem.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default withStyles(styles)(SubMenuItem);
