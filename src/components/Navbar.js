import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <header>
          <h1>Tabletop App</h1>
          <hr />
        </header>
       <Link style={{"marginLeft":"1000px"}} to="/">Players</Link>
       <Link style={{"marginLeft":"50px"}} to="/add-player">Add Player</Link>
      </nav>
  );
};

export default Navbar;