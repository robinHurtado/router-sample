import React from 'react';
import { Redirect } from 'react-router-dom';

const Songs = ({ className }) => {
  return (
    <div>
      <h1>List of Songs</h1>
      <Redirect to="/idk" />
    </div>
  );
};

export default Songs;
