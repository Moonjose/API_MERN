import Axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Button, Container } from '../styles/GlobalStyles';
const baseUrl = 'http://localhost:5000';

const UsersPage = ({users}) => {
  const handleDeleteUser = (id) => {
    const deleteData = async () => {
      await Axios.delete(`${baseUrl}/${id}`);
    };
    deleteData();
  };
  return (
    <Container name={'desc'}>
      <Box>
        <table className='table table-striped table-bordered'>
          <thead className='table-dark'>
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>Name</th>
              <th scope='col'>Username</th>
              <th scope='col'>Age</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
          {users.map((user, index) => {
              return (
                <tr key={index}>
                  <td className='align-middle'>{index + 1}</td>
                  <td className='align-middle'><NavLink to={`/users/${user._id}`}>{user.name}</NavLink></td>
                  <td className='align-middle'>{user.username}</td>
                  <td className='align-middle'>{user.age}</td>
                  <td>
                    <Button isred={true} onClick={() => handleDeleteUser(user._id)}>delete</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Box>
    </Container>
  )
}

export default UsersPage