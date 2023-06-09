// File name: api.js
// Auth: Terminal Swag Disorder
// Desc: File containing code for user api functionality

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, useLocation, useNavigate } from 'react-router-dom';
import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';
import { AppNav } from './components/AppNav';


function API({ onUserChange }) {
  const [users, setUsers] = useState([]);
  const [cars, setCars] = useState([]);
  const [prices, setPrices] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);


  useEffect(() => {
    fetchUserData();
    fetchCarData();
    fetchPriceData();

  }, []);
	
    // Fetch user data
  const fetchUserData = () => {
    fetch('http://localhost:4000/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(console.error);
  };
    // Fetch car data
  const fetchCarData = () => {
    fetch('http://localhost:4000/api/cars')
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(console.error);
  };
  
    // Fetch mileage price data
  const fetchPriceData = () => {
    fetch('http://localhost:4000/api/mileage_prices')
      .then(response => response.json())
      .then(data => setPrices(data))
      .catch(console.error);
  };

const handleAddUser = (event) => {
  const Name = event.target.name.value;
  const Email = event.target.email.value;
  const Password = event.target.password.value;
  if (Name && Email && Password) {
    fetch('http://localhost:4000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ Name, Email, Password }),
    })
      .then(response => response.json())
      .then(data => setUsers([...users, { ID: data.id, Name, Email, Password }]))
      .catch(console.error);
  }
};

	
const handleAddCar = () => {
  const UID = prompt('Enter UID:');
  const Manufacturer = prompt('Enter Manufacturer:');
  const Model = prompt('Enter Model:');
  let Is_Electric;
  do {
    Is_Electric = prompt('Is Electric (0 or 1):');
  } while (!/^[01]$/.test(Is_Electric));
  let Tank, Battery;
  if (Is_Electric === '1') {
    Battery = prompt('Enter Battery:');
  } else {
    Tank = prompt('Enter Tank:');
  }
  if (UID && Manufacturer && Model && Is_Electric && ((Is_Electric === '1' && Battery) || (Is_Electric === '0' && Tank))) {
    fetch('http://localhost:4000/api/cars', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ UID, Manufacturer, Model, Tank, Battery, Is_Electric }),
    })
      .then(response => response.json())
      .then(data => {
        setCars([...cars, { ID: data.id, UID, Manufacturer, Model, Tank, Battery, Is_Electric }]);
      })
      .catch(console.error);
  }
};


const handleAddPrice = () => {
    const CID = prompt('Enter CID:');
    const Total_filled = prompt('Enter Total Filled:');
    const Total_price = prompt('Enter Total Price:');
    const Total_distance = prompt('Enter Total Distance:');
    if (CID && Total_filled && Total_price && Total_distance) {
      fetch('http://localhost:4000/api/mileage_prices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ CID, Total_filled, Total_price, Total_distance }),
      })
        .then(response => response.json())
        .then(data => setPrices([...prices, { ID: data.id, CID, Total_filled, Total_price, Total_distance }]))
        .catch(console.error);
    }
  };

const navigate = useNavigate();


const handleCheckUser = (user) => {
  return new Promise((resolve, reject) => {
    const foundUser = users.find(
      (u) => u.Email === user.Email && u.Password === user.Password
    );

    if (foundUser) {
      setCurrentUser(foundUser);
      localStorage.setItem("currentUserId", foundUser.Id);
      resolve(foundUser);
	  console.log(foundUser)
    } else {
      reject("Invalid email or password1");
    }
  });
};

	
const fetchUser = (email, password) => {
  return fetch(`http://localhost:4000/api/users?Email=${encodeURIComponent(email)}&Password=${encodeURIComponent(password)}`)
      .then(response => response.json());
  };
		

const handleSignOut = () => {
  localStorage.removeItem('currentUserId');
  setCurrentUser(null);
  console.log("Signout user:", currentUser)
};

const location = useLocation();

  return (
    <div>
      {currentUser && <AppNav currentUser={currentUser} onSignOut={handleSignOut} />}
      {location.pathname === '/signup' && <SignUp onSubmit={handleAddUser} />}
      {location.pathname === '/signin' && <SignIn currentUser={currentUser} onSubmit={handleCheckUser} />}
    </div>
  );
}

function APISignUp(props) {
  return (
    <API onUserChange={props.onUserChange}>
      {(onSubmit) => <SignUp onSubmit={onSubmit} />}
    </API>
  );
}

function APISignIn(props) {
  return (
    <API {...props}>
      {(onSubmit) => <SignIn onSubmit={onSubmit} />}
    </API>
  );
}

reportWebVitals();

export { API, APISignUp, APISignIn };