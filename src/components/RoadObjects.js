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
    marginTop: theme.spacing.unit * 6,
    overflowX: 'auto',
  },
});

const RoadObjects = props => (
  <Paper className={props.classes.root}>
    <List component="nav">
      {props.roadObjects.map(({ id, kind }) => (
        <ListItem button key={id}>
          <Avatar>
            <ImageIcon />
          </Avatar>
          <ListItemText primary={kind} secondary={id} />
        </ListItem>
      ))}
    </List>
  </Paper>
);

RoadObjects.propTypes = {
  roadObjects: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RoadObjects);
