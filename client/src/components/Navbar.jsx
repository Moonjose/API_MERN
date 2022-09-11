import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
      <Link to='/home' className='navbar-brand' style={{ margin: '0 auto' }}>
        <AiFillHome />
      </Link>
    </nav>
  );
};

export default Navbar;
