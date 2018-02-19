import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import SubMenuItem from './SubMenuItem';

class SubMenu extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    // to: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired,
  };

  state = { open: false };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { name, children } = this.props;
    const { open } = this.state;
    const expand = open ? <ExpandLess /> : <ExpandMore />;
    const rows = children.map(child => (
      <SubMenuItem key={child.to} {...child} />
    ));
    return (
      <Fragment>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText inset primary={name} />
          {expand}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {rows}
          </List>
        </Collapse>
      </Fragment>
    );
  }
}

export default SubMenu;
