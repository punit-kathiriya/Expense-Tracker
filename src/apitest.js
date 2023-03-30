import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

function API() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(console.error);
  }, []);

  const handleAddUser = () => {
    const Name = prompt('Enter a name:');
    if (Name) {
      fetch('http://localhost:4000/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Name }),
      })
        .then(response => response.json())
        .then(data => setUsers([...users, { ID: data.id, Name }]))
        .catch(console.error);
    }
  };

  return (
    <div>
      <h1>React Web Service with SQLite</h1>
      <button onClick={handleAddUser}>Add User</button>
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
