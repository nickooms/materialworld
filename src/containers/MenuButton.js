import { connect } from 'react-redux';

import MenuButton from '../ui/MenuButton';
import { toggleMobileDrawerOpen as toggle } from '../actions';

export default connect(
  () => ({}),
  dispatch => ({
    onClick: () => dispatch(toggle()),
  }),
)(MenuButton);
