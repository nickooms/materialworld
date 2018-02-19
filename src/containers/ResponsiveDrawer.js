import { connect } from 'react-redux';

import ResponsiveDrawer from '../components/ResponsiveDrawer';
import { toggleMobileDrawerOpen as toggle } from '../actions';

export default connect(
  state => ({
    open: state.mobileDrawerOpen,
  }),
  dispatch => ({
    toggle: () => dispatch(toggle()),
  }),
)(ResponsiveDrawer);
