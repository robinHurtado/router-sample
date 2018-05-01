import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Home = (props) => {
  console.log("En home:",props)
  return (
    <div>
      <h1>Welcome You!!</h1>
      <h3>This is the Home page!!</h3>
      <ul>
        <li><Link to="/movies">Movies</Link></li>
        <li>
          <NavLink
            to="/books"
            activeStyle={{
             color: 'black',
             fontWeight: 'bold'
            }}
          >
            Books
          </NavLink>
        </li>
        <li><Link to="/articles">Articles</Link></li>
      </ul>
    </div>
  );
};

export default Home;
