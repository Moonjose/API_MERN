import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Form, FormButton } from '../styles/GlobalStyles';
const baseUrl = 'http://localhost:5000';
const Edit =  () => {
  const [,setUsers] = useState([]);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    getUsers();
  }, []);

  const { id } = useParams();

  async function getUsers() {
    const response = await axios.get(`${baseUrl}`);
    setUsers(response.data);
  }

  async function getByIdAndUpdate(e) {
    e.preventDefault();
    const body = { name, username, age }
    if(name && username && age) {
      await axios.put(`${baseUrl}/users/edit/${id}`, body);
      navigate('/');
    } else {
      alert('Preencha todos os campos');
    }
  }

  const handleEditName = (e) => {
    setName(e.target.value);
  }

  const handleEditUsername = (e) => {
    setUsername(e.target.value);
  }

  const handleEditAge = (e) => {
    setAge(e.target.value);
  }

  return (
    <Container >
      <Form>
          <h1 style={{textAlign: 'center'}}>Editar Contato</h1>
          <input type='text'  placeholder='ex: José' onChange={(e) => handleEditName(e) }></input>
          <input type='text'  placeholder='ex: @jodvs' onChange={(e) => handleEditUsername(e) }></input>
          <input type='text'  placeholder='ex: 21' onChange={(e) => handleEditAge(e) }></input>
          <FormButton color='#00C23D' onClick={(e) => getByIdAndUpdate(e)}>Editar</FormButton>
        </Form>
    </Container>
  )
}

export default Edit