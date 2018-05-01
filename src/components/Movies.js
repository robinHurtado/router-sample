import React from 'react';
import { Redirect } from 'react-router-dom';

const Movies = ({ className }) => {
  return (
    <div>
      <h1>List of Movies</h1>
      <Redirect to="/idk" />
    </div>
  );
};

export default Movies;
