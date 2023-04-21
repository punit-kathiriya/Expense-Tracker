// File name: AddCar.js
// Auth: Punit
// Desc: This file containing code for the Expense Tracker to display the prices

import React, { useState, useEffect } from "react";
import { Button, Container } from 'react-bootstrap';
import { CiCirclePlus } from "react-icons/ci";


export const Home = () => {
  return (
    <>
    <div className="homepage-container">
      <Container className="my-5">
          <h1>Welcome to Expense Tracker App</h1>
          <p>Car Fuel Expenses application to help families calculate the fuel expenses of their cars. This application dynamically calculates and presents various information related to the refueling expenses of cars.</p>
          <div>
            <Button href="signin" variant="primary">Sign In</Button> { }
            <Button href="signup" variant="outline-secondary">Sign Up</Button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;