import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { API, APISignUp, APISignIn } from './api';
import  AppNav  from './components/AppNav';
import { SignIn } from './components/SignIn'
import { SignUp } from './components/SignUp'
import { Home } from './components/Home';
import { Main } from './components/Main';
import { Cars } from './components/Cars';
import { AddCar } from './components/AddCar';
import { Container } from 'react-bootstrap';



function App({ currentUser, setCurrentUser }) {

	
  const handleUserChange = (event) => {
    setCurrentUser(event);
    };
	
  console.log("app.js", currentUser)

  return (
    <div className="App">
      <AppNav currentUser={currentUser} />
	  
      <Container className="">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/signin" element={<APISignIn onUserChange={handleUserChange} />} />
	    <Route path="/signup" element={<APISignUp onUserChange={handleUserChange} />} />
        <Route path="/api" element={<API />} />
        <Route path="/cars/add" element={<AddCar />} />
        </Routes>
      </Container>
      
    </div>
  );
}


export default App;