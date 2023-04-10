// File name: SignIn.js
// Auth: Sami Wazni
// Desc: File currently in development containing code for user sign in

import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Log from '../images/Log.jpg';
import { BiLogInCircle } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

export const SignIn = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      Email: email,
      Password: password,
    };

    onSubmit(user)
      .then((foundUser) => {
        navigate("/");
      })
      .catch((error) => {
        alert("Wrong email or password2")
        console.error(error);
        // You can also update the component state to show an error message to the user.
      });
  };
  
  return (
    <div className="LogPages">
      <Row>
        <Col>
          <img src={Log} alt="..." />
        </Col>
        <Col>
          <div className="Form">
            <form onSubmit={handleSubmit}>
              <h3>Sign In</h3>
              <div className="mb-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  required
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label className="custom-control-label" id="check" htmlFor="customCheck1"> 
                    Remember me
                  </label>
                </div>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Sign in <BiLogInCircle />
                </button>
              </div>
              <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
              </p>
            </form>
          </div>
        </Col>
      </Row>   
    </div>
  );
}

export default SignIn;
