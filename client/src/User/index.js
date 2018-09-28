import User from './User';

import { deleteUser, updateUser } from './../socket';
import { compose, withState, withHandlers, withProps } from 'recompose';

const state = withState('isEditable', 'changeEditMode', false);

const handlers = withHandlers({
  handleCancel: props => (e) => (e.preventDefault(), props.changeEditMode(false)),
  handleSave: props => (e) => {
    e.preventDefault();
    props.changeEditMode(false);
    const { name: { value: name }, address: { value: address }, phone: { value: phone } } = e.target;
    props.updateUser(props.id, { name, address, phone });
  }
});

const props = withProps(props => ({
  deleteUser,
  updateUser,
}))


export default compose(
  state,
  props,
  handlers,
)(User);
