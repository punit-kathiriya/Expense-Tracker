import React from 'react';
import './App.css';
import { Home } from './components/Home';
import { Main } from './components/Main';
import { Cars } from './components/Cars';
import { SignIn } from './components/SignIn'
import { SignUp } from './components/SignUp'
import  AppNav  from './components/AppNav';
import { API, APISignUp } from './api';
import { Routes, Route } from 'react-router-dom';
import { AddCar } from './components/AddCar';
import { Container } from 'react-bootstrap';



function App() {
  return (
    <div className="App">
      <AppNav />
      <Container className="">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/signin" element={<SignIn />} />
	    <Route path="/signup" element={<APISignUp />} />
        <Route path="/api" element={<API />} />
        <Route path="/cars/add" element={<AddCar />} />
        </Routes>
      </Container>
      
    </div>
  );
}

export default App;