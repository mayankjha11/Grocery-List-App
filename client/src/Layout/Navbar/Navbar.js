import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
   <nav className="NavBar-Wrapper">
     <div>
       <h3 className="NavBar-Title">Grocery List App</h3>
     </div>
     <div className="NavBar-Links">
      <Link to="/" className="NavBar-Link">HOME</Link>
      <Link to="/add" className="NavBar-Link">ADD</Link>
     </div>
   </nav>
  );
};

export default Home;
