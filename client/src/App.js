import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Home from './components/Home';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';
import Edit from './components/Edit';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import Axios from 'axios';
// const baseUrl = 'http://localhost:5000';

// import EditUser from './components/EditUser';
// import UsersPage from './components/UsersPage';


function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/edit/:id' exact element={<Edit />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
