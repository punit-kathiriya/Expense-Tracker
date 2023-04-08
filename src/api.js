// File name: api.js
// Auth: Terminal Swag Disorder
// Desc: File containing code for user api functionality

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { SignUp } from './components/SignUp';


function API() {
  const [users, setUsers] = useState([]);
  const [cars, setCars] = useState([]);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(console.error);

    fetch('http://localhost:4000/api/cars')
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(console.error);

    fetch('http://localhost:4000/api/mileage_prices')
      .then(response => response.json())
      .then(data => setPrices(data))
      .catch(console.error);
  }, []);

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
	
const location = useLocation();

  return (
    <div>
      {location.pathname === '/signup' && <SignUp onSubmit={handleAddUser} />}

    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <API />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

function APISignUp() {
  return (
    <API>
      {(onSubmit) => <SignUp onSubmit={onSubmit} />}
    </API>

  );
}

reportWebVitals();

export { API, APISignUp};