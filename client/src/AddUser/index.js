import AddUser from './AddUser';

import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { addUser } from './../socket';

const handlers = withHandlers({
  handleSubmit: props => e => {
    e.preventDefault();
    const { name: { value: name }, address: { value: address }, phone: { value: phone } } = e.target;
    props.addUser({ name, address, phone });
    e.target.reset();
  }
});

export default compose(
  connect(null, { addUser }),
  handlers,
)(AddUser)
