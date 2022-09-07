import React, { useState, useRef } from 'react';
import { useEffect } from 'react';

const CreateExercises = () => {
  const usersArr = ['jose', 'john', 'kenny'];
  const [users, setUsers] = useState(usersArr);
  const refContainer = useRef(null);
  useEffect(() => {
    console.log(users);
  }, [users]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChangeArray = (e) => {
    const newElement = e.target.value;
    setUsers((prevArr) => [...prevArr, newElement]);
  };

  const handleChangeUsername = () => {};
  return (
    <div style={{ padding: '50px' }}>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Username: </label>
          <select
            className='form-control'
            // value={users[0]}
            onChange={handleChangeUsername}
          >
            {users.map((user, index) => {
              return <option key={index}>{user}</option>;
            })}
          </select>
          <br />
          <input
            ref={refContainer}
            type='text'
            className='form-control'
            onSubmit={handleChangeArray}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default CreateExercises;
