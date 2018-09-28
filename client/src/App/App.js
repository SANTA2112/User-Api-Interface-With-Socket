import React from 'react';
import { Card, Wrapper } from './styled';
import AddUser from '../AddUser';
import User from '../User';

const App = ({ users }) => {
  console.log(users)
  return (
    <Wrapper>
      <AddUser />
      <Card>
        {
          users.map(({ _id, name, address, phone }) => <User key={_id} name={name} address={address} phone={phone} id={_id}/>)
        }
      </Card>
    </Wrapper>

  )
}

export default App;

