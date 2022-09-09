import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, InfoDiv } from '../styles/GlobalStyles'

const EditUser = ({users}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const user = users.find((user) =>  user._id === id );
  const { name, username, age } = user;
 
  return (
    <InfoDiv>
        <h1>{name}</h1>
        <p>{username} / {age}</p>
        <div>
          <Button >Edit</Button> | <Button onClick={() => navigate('/')}>Back</Button>
        </div>
    </InfoDiv>
  )
}

export default EditUser