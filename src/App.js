import './App.css';
import React, { useState } from 'react';
import AppNav from './components/AppNav';
import { Home } from './components/Home';
import { Main } from './components/Main';
import { Cars } from './components/Cars';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { API, APISignUp, APISignIn, APIAddCar } from './api';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleUserChange = (event) => {
    setCurrentUser(event);
  };
  if (currentUser) {
    console.log("app.js", currentUser);
  }
  return (
    <div className="App">
      <AppNav
      // key={currentUser ? currentUser.ID : "logged-out "}
      // currentUser={currentUser}
      />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/main"
            element={<APIMain onUserChange={handleUserChange} />}
          />
          <Route path="/cars" element={<Cars />} />
          <Route
            path="/signin"
            element={<APISignIn onUserChange={handleUserChange} />}
          />
          <Route
            path="/signup"
            element={<APISignUp onUserChange={handleUserChange} />}
          />
          <Route path="/api" element={<API />} />
          <Route
            path="/cars/add"
            element={<APIAddCar onUserChange={handleUserChange} />}
          />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
