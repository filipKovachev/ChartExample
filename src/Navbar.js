import React from 'react';
import { Link  } from 'react-router-dom';

 export default function Navbar () {
 
    return (
     <nav className="navbar">
      <h1>Flight Info</h1>
      <div className="links">
      <Link className="link" to="/">First Grid</Link>
      <Link className="link" to="/secondGrid">Second Chart</Link>
      </div>
    </nav>
    );
  }