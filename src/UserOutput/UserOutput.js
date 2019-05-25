import React from 'react';

import './UserOutput.css';

const UserOutput = (props) => {

  return (
  <div className="UserOutput">
      <p className="p1">{props.username}</p>
      <p className="p2">{props.children}</p>
  </div>
  )
};

export default UserOutput;