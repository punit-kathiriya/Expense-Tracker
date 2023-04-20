import './App.css';
import React, { useState } from 'react';
import AppNav from './components/AppNav';
import { Home } from './components/Home';
import { Cars } from './components/Cars';
import { Container } from 'react-bootstrap';
import { Routes, Route, Navigate} from 'react-router-dom';
import { API, APISignUp, APISignIn, APIAddCar, APIMain } from "./api";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleUserChange = (event) => {
    setCurrentUser(event);
  };
  if (currentUser) {
    console.log("app.js", currentUser);
  }

  // To check if the user did sign in or not
  const isUserSignedIn = () => {
    const userId = localStorage.getItem("currentUserId");
    return !!userId;
  };
  
  return (
    <div className="App">
      <AppNav
      />
      <Container>
        <Routes>
          <Route
            path="/"
            element={isUserSignedIn() ? <Home onUserChange={handleUserChange} /> : <Navigate to="/signin" />}
          />
          <Route
            path="/main"
            element={isUserSignedIn() ? <APIMain onUserChange={handleUserChange} /> : <Navigate to="/signin" />}
          />
          <Route
            path="/cars"
            element={isUserSignedIn() ? <Cars /> : <Navigate to="/signin" />}
          />
          <Route
            path="/cars/add"
            element={isUserSignedIn() ? <APIAddCar onUserChange={handleUserChange} /> : <Navigate to="/signin" />}
          />
          <Route
            path="/signin"
            element={<APISignIn onUserChange={handleUserChange} />}
          />
          <Route
            path="/signup"
            element={<APISignUp onUserChange={handleUserChange} />}
          />
          <Route path="/api" element={<API />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
