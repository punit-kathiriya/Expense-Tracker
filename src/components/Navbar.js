import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <nav className="Navbar">
        <ul className="Navlist">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/main">MAIN</Link></li>
          <li><Link to="/cars">CARS</Link></li>
        </ul>
      </nav>
      <div className='LogSysystem'>
        <li><Link to="/#">SIGN IN</Link></li>
        <li><Link to="/#">SIGN UP</Link></li>
      </div>
    </>
    
  );
};

export default Navbar;