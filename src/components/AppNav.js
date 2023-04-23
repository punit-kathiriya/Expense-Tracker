// File name: AppNav.js
// Auth: Sami Wazni
// Desc: This file containing code for creating a Menu

import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const AppNav = ({ currentUser, onUserChange }) => {
  const [foundUser, setFoundUser] = useState(currentUser);

  useEffect(() => {
    setFoundUser(currentUser);
  }, [currentUser]);

  console.log("appnav founduser:", foundUser);

  const getId = localStorage.getItem("currentUserId");
  const getName = localStorage.getItem("currentUserName");

  const handleSignOut = () => {
    localStorage.removeItem("currentUserId");
    onUserChange(null);
    setFoundUser(null); // set the state to null
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand to="/">Expense Tracker App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Link to="/" className="active">Home</Link>
                  
            {getId && getId ? (
              <>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/main">Main</Link>
                <Link to="/cars">Cars</Link>
              </>
            ) : null}
          </Nav>
          <Nav>
            {getId && getId ? (
              <>
                <div className='navmenu_btn'>
                <span className="navbar-text"> {getName}</span>
                <Link to="/signin" onClick={handleSignOut}>
                  Sign Out
                </Link>
                </div>
              </>
            ) : (
              <>
                <Link to="/signin">Sign In</Link>
                <Link to="/signup">Sign Up</Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


export default AppNav;
