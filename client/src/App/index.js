import { hot } from 'react-hot-loader'
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { getUsers } from './../store/actions';
import { socket } from './../socket';

import App from './App';

const lc = lifecycle({
  componentDidMount() {
    socket.on('receiveUsers', this.props.getUsers)
  }
})

export default compose(
  hot(module),
  connect(store => ({ users: store.users }), { getUsers }),
  lc
)(App)

