// File name: AppNav.js
// Auth: Sami Wazni
// Desc: This file containing code for creating a Menu

import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom"

export const AppNav = ({ currentUser, onSignOut }) => {
  const [foundUser, setFoundUser] = useState(currentUser);

  useEffect(() => {
    setFoundUser(currentUser);
  }, [currentUser]);

  console.log("appnav founduser:", foundUser);

  if (currentUser) {
    console.log("appnav.js:", currentUser);
    console.log("appnav.js name:", currentUser.Name);
  }

  console.log(onSignOut);

  const getId = localStorage.getItem("currentUserId");

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand to="/">Expense Tracker App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="active">
              Home
            </Link>
            <Link to="/main">Main</Link>
            <Link to="/cars">Cars</Link>
          </Nav>
          <Nav>
            {getId && getId ? (
              <>
                <span className="navbar-text">{currentUser?.Name}</span>
                <Link to="/signin" onClick={onSignOut}>
                  Sign Out
                </Link>
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
