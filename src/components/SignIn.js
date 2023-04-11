// File name: SignIn.js
// Auth: Sami Wazni
// Desc: File currently in development containing code for user sign in

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Log from '../images/Log.jpg';
import { BiLogInCircle } from "react-icons/bi";
import '../App.css';

export const SignIn = () => {
  return (
    <div className="LogPages">
    <Row>
        <Col>
        <div className='image-container'>
            <img src={Log} alt="..." className= 'login-page-image'/>
        </div>
        </Col>
        <Col>
        <div className="Form">
            <form>
                <h3>Sign In</h3>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        required
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