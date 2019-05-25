import React from 'react';
import './UserInput.css';

const UserInput = (props) => {

  return (
  <div className="UserInput">
      <input type="text" onChange={props.change} value={props.username}></input>
  </div>
  )
};

export default UserInput;