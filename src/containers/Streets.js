import { connect } from 'react-redux';

import Streets from '../components/Streets';

const mapStateToProps = state => ({
  streets: state.streets,
});

export default connect(mapStateToProps)(Streets);
