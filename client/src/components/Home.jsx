import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { Box, Container, Form, FormButton } from '../styles/GlobalStyles';
import { AiOutlineCaretUp, AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { HiUserAdd } from 'react-icons/hi';
// ---------------------------------------------------
const Home = () => {
  const [users, setUsers] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(0);
  const navigate = useNavigate();
  const hasUsers = users.length >= 1;

  async function getUsers() {
    const response = await axios.get(`${process.env.REACT_APP_URL}/home`);
    setUsers(response.data);
    console.log(response.data);
  }

  async function createUser(e) {
    try {
      if(name && username && age) {
        e.preventDefault();
        const body = {name, username, age};
        await axios.post(`${process.env.REACT_APP_URL}/new`, body)
        setName('');
        setUsername('');
        setAge(0);
        getUsers();
      } else {
        e.preventDefault();
        alert('Preencha todos os campos corretamente');
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteUser(id) {
    await axios.delete(`${process.env.REACT_APP_URL}/${id}`);
    getUsers();
  }
  
  async function editUser(id) {
    navigate(`/edit/${id}`);
  }
  
  useEffect(() => {
    getUsers();
  }, []);

  const handleChangeName = (e) => {
    setName(e.target.value);
  }
  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  }
  const handleChangeAge = (e) => {
    setAge(e.target.value);
  }

  return (
    <>
      <Container>
        <Box>
          <table  className='table table-striped table-bordered'>
            <thead className='table-dark'>
              <tr>
                <th scope='col'>Id</th>
                <th scope='col'>Nome</th>
                <th scope='col'>Usuário</th>
                <th scope='col'>Idade</th>
                <th scope='col'></th>
                <th scope='col'></th>
               </tr>
             </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td className='align-middle'>{index + 1}</td>
                    <td className='align-middle'>{user.name}</td>
                    <td className='align-middle'>{user.username}</td>
                    <td className='align-middle'>{user.age}</td>
                    <td className='text-center'>
                      <FormButton color='#00C23D' onClick={() => editUser(user._id)}><AiFillEdit/></FormButton>
                    </td>
                    <td className='text-center'>
                      <FormButton color='#e40000' onClick={() => deleteUser(user._id)}><AiFillDelete/></FormButton>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Box>
        {!hasUsers && <h4>Clique abaixo para criar um usuário</h4>}
        <FormButton color='#aeaeae' onClick={() => setFormVisible(!formVisible)}>{formVisible ? <AiOutlineCaretUp /> : <HiUserAdd />}</FormButton>
      </Container>
      {formVisible && 
      <Container>
        <Form>
          <h1 style={{textAlign: 'center'}}>Novo Contato</h1>
          <input type='text' value={name} placeholder='ex: José' onChange={(e) => handleChangeName(e) }></input>
          <input type='text' value={username} placeholder='ex: @jodvs' onChange={(e) => handleChangeUsername(e) }></input>
          <input type='text' value={age === 0 ? '' : age} placeholder='ex: 21' onChange={(e) => handleChangeAge(e) }></input>
          <FormButton onClick={(e) => createUser(e)} color='#00C23D'>Criar</FormButton>
        </Form>
      </Container>
      } 
    </>
  )
}

export default Home