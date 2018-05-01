import React from 'react';
import { Redirect } from 'react-router-dom';

const Books = (props) => {
  console.log('en Books:',props);
  return (
    <div>
      <h1>List of Books</h1>
      <Redirect to="/songs" />
    </div>
  );
};

export default Books;
