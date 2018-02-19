import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '../../ui/Drawer';

const TemporaryDrawer = props => (
  <Drawer
    open={props.open}
    type="temporary"
    onClose={props.onClose}
    ModalProps={{ keepMounted: true }}
    {...props}
  />
);

TemporaryDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default TemporaryDrawer;
