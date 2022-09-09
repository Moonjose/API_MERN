import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Axios from 'axios';

const baseUrl = 'http://localhost:5000';
function FetchComponent() {
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
          console.log(`'User Created'`);
        })
        .catch((err) => console.error(err));
    } else {
      alert('Preencha todos os campos');
    }
  };

  return (
    <div></div>
  )
}

export default FetchComponent