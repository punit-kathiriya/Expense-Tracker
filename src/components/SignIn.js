// File name: SignIn.js
// Auth: Sami Wazni
// Desc: File currently in development containing code for user sign in

import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Log from '../images/Log.jpg';
import { BiLogInCircle } from "react-icons/bi";
import { validation } from '../components/LoginValidation'

export const SignIn = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({})

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
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
                  name="email"
                  onChange={handleInput}
                />
                {errors.email && <span className='validation'>{errors.email}</span>}
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  name="password"
                  onChange={handleInput}
                />
                {errors.password && <span className='validation'>{errors.password}</span>}
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
              <div className='FormSmallText'>
                <p className="forgot-password text-right">
                  Forgot <a href="#">password?</a>
                </p>
                <p className="forgot-password text-right">
                    Do not have account? <a href="/signup">sign up</a>
                </p>
              </div>
            </form>
          </div>
        </Col>
      </Row>   
    </div>
  );
}

export default SignIn;
