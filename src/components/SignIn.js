// File name: SignIn.js
// Auth: Sami Wazni
// Desc: File currently in development containing code for user sign in

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Log from '../images/Log.jpg';
import { BiLogInCircle } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';


export const SignIn = ({ onSubmit }) => {
	const navigate = useNavigate();

    const handleSubmit = (event) => {
		event.preventDefault();
        onSubmit(event);
		navigate('/');
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