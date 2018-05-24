import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div>
      <h1>Welcome You!!</h1>
      <h3>This is the Home page!!</h3>
      <ul>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/articles">Articles</Link></li>
        <li><Link to="/books">Books</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
