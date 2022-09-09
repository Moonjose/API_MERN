import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';
import EditUser from './components/EditUser';
import { useState } from 'react';
import { useEffect } from 'react';
import Axios from 'axios';
import UsersPage from './components/UsersPage';
const baseUrl = 'http://localhost:5000';


function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await Axios.get(`${baseUrl}`).then((response) => {
        setUsers(response.data);
      });
    };
    fetchData();
  },[]);

  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path='/' exact element={<UsersPage users={users}/>} />
        <Route path='/users/:id' exact element={<EditUser users={users} />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
