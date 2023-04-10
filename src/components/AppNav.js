import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"

export const AppNav = ({ currentUser, onSignOut }) => {
	
	if (currentUser) {
	console.log("appnav.js:", currentUser)
	}
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand to="/">Expense Tracker App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="active">Home</Link>
            <Link to="/main">Main</Link>
            <Link to="/cars">Cars</Link>
          </Nav>
          <Nav>
            {currentUser && (
              <>
                <span className="navbar-text">{currentUser.Name}</span>
                <Link to="/" onClick={onSignOut}>Sign Out</Link>
              </>
            )}
            {!currentUser && (
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
