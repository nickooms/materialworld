import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

const NestedItem = ({
  classes, to, primary, secondary, icon,
}) => (
  <Link to={to}>
    <ListItem button className={classes.nested}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText inset primary={primary} secondary={secondary} />
    </ListItem>
  </Link>
);

NestedItem.propTypes = {
  classes: PropTypes.object.isRequired,
  to: PropTypes.string.isRequired,
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default withStyles(styles)(NestedItem);
