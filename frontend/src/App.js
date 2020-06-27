// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import * as actionCreators from './actions/actionCreators';
import Main from './components/Main/Main';

const App = withRouter((Main));

export default App;
