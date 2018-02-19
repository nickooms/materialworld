import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';

class SubMenu extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
  };

  state = { open: true };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { children, name, icon } = this.props;
    return (
      <Fragment>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText inset primary={name} />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children}
          </List>
        </Collapse>
      </Fragment>
    );
  }
}

export default SubMenu;
