import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ImageIcon from 'material-ui-icons/Image';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
    maxWidth: 360,
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
});

const Streets = props => (
  <Paper className={props.classes.root}>
    <List component="nav">
      {props.streets.map(({ id, name }) => (
        <ListItem button key={id}>
          <Avatar>
            <ImageIcon />
          </Avatar>
          <ListItemText primary={name} secondary={id} />
        </ListItem>
      ))}
    </List>
  </Paper>
);

Streets.propTypes = {
  streets: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Streets);
