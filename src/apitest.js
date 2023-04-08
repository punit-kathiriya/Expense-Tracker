import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

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

  const handleAddUser = () => {
    const Name = prompt('Enter name:');
    const Email = prompt('Enter email:');
    const Password = prompt('Enter password:');
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
	

  return (
    <div>
      <h1>React Web Service with SQLite</h1>
      <button onClick={handleAddUser}>Add User</button>
      <button onClick={handleAddCar}>Add Car</button>
      <button onClick={handleAddPrice}>Add Mileage Price</button>
	  <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.ID}>
              <td>{user.ID}</td>
              <td>{user.Name}</td>
              <td>{user.Email}</td>
              <td>{user.Password}</td>
            </tr>
          ))}
        </tbody>
      </table>
  <h2>Cars</h2>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>UID</th>
        <th>Manufacturer</th>
        <th>Model</th>
        <th>Tank</th>
        <th>Battery</th>
        <th>Is Electric</th>
      </tr>
    </thead>
    <tbody>
      {cars.map(car => (
        <tr key={car.UID}>
          <td>{car.ID}</td>
          <td>{car.UID}</td>
          <td>{car.Manufacturer}</td>
          <td>{car.Model}</td>
          <td>{car.Tank}</td>
          <td>{car.Battery}</td>
          <td>{car.Is_Electric}</td>
        </tr>
      ))}
    </tbody>
  </table>
  <h2>Prices</h2>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>CID</th>
        <th>Total filled</th>
        <th>Total price</th>
        <th>Total distance</th>
      </tr>
    </thead>
    <tbody>
      {prices.map(price => (
        <tr key={price.ID}>
          <td>{price.ID}</td>
          <td>{price.CID}</td>
          <td>{price.Total_filled}</td>
          <td>{price.Total_price}</td>
          <td>{price.Total_distance}</td>
        </tr>
      ))}
    </tbody>
  </table>

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

reportWebVitals();

export { API };
