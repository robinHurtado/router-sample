import React from 'react';
import { Redirect } from 'react-router-dom';

const Movies = (props) => {
  console.log("En movies:",props)
  return (
    <div>
      <h1>List of Movies</h1>
      <Redirect to="/idk" />
    </div>
  );
};

export default Movies;
