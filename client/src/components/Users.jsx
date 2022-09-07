import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Axios from 'axios';
import '../styles/Users.css';

const baseUrl = 'http://localhost:5000';
const Users = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      await Axios.get(`${baseUrl}`).then((response) => {
        setUsers(response.data);
      });
    };
    fetchData();
  });

  const handleDeleteUser = (id) => {
    const deleteData = async () => {
      await Axios.delete(`${baseUrl}/${id}`);
    };
    deleteData();
  };

  const handleCreateUser = () => {
    const body = { name, username, age };
    if (name && username && age) {
      Axios.post(`${baseUrl}/new`, body)
        .then(() => {
          console.log('User Created');
        })
        .catch((err) => console.error(err));
    } else {
      alert('Preencha todos os campos');
    }
  };

  return (
    <div className='wrapper'>
      <div className='container'>
        <table className='table table-striped table-bordered'>
          <thead className='table-dark'>
            <tr>
              <th scope='col'></th>
              <th scope='col'>Name</th>
              <th scope='col'>Username</th>
              <th scope='col'>Age</th>
              <th scope='col'>Id</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.age}</td>
                  <td>{user._id}</td>
                  <td>
                    <button onClick={() => handleDeleteUser(user._id)}>delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className='addfield'>
        <input type='text' placeholder='name' onChange={(e) => setName(e.target.value)}></input>
        <input
          type='text'
          placeholder='username'
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input type='text' placeholder='age' onChange={(e) => setAge(e.target.value)}></input>
        <button onClick={handleCreateUser}>Create a friend</button>
      </div>
    </div>
  );
};

export default Users;
