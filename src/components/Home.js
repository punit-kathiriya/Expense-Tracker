// File name: AddCar.js
// Auth: Punit
// Desc: This file containing code for the Expense Tracker to display the prices

import React, { useState, useEffect } from "react";
import { Button, Container } from 'react-bootstrap';
import { CiCirclePlus } from "react-icons/ci";


export const Home = ({ currentUser, onUserChange }) => {
  const [foundUser, setFoundUser] = useState(currentUser);

  useEffect(() => {
    setFoundUser(currentUser);
  }, [currentUser]);


  const getId = localStorage.getItem("currentUserId");

  const handleSignOut = () => {
    localStorage.removeItem("currentUserId");
    onUserChange(null);
    setFoundUser(null); // set the state to null
  };


  return (
    <>
    <div className="homepage-container">
      <Container className="my-5">
          <h2>Welcome to Expense Tracker App</h2><br></br>
          <p>Car Fuel Expenses application to help families calculate the fuel expenses of their cars. This application dynamically calculates and presents various information related to the refueling expenses of cars.</p>
          <div> <br></br>
          {getId && getId ? (
              <>
                <span className="navbar-text">{currentUser?.Name}</span>
                
                <Button href="signin" onClick={handleSignOut} variant="primary">Sign Out</Button>
              </>
            ) : (
              <>
                
            <Button href="signin" variant="primary">Sign In</Button> { }
            <Button href="signup" variant="outline-secondary">Sign Up</Button>
              </>
            )}
            
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;