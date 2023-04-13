// File name: SignUp.js
// Auth: Sami Wazni/Terminal Swag Disorder
// Desc: File currently in development containing code for user sign up

import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Log from '../images/Log.jpg';
import { AiOutlineLogin } from "react-icons/ai";
import { validation } from '../components/LoginValidation'


export const SignUp = () => {
    const [values, setValues] = useState({
        name: '',
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
                    <h3>Sign Up</h3>
                    <div className="mb-3">
                    <label>Username</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
						name="name"
                        onSubmit={handleInput}
                    />
                    {errors.name && <span className='validation'>{errors.name}</span>}
                    </div>
                    <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
						name="email"
                        onSubmit={handleInput}
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
                        onSubmit={handleInput}
                    />
                    {errors.password && <span className='validation'>{errors.password}</span>}
                    </div>                    
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary">
                        Sign Up <AiOutlineLogin />
                    </button>
                    </div>
                    <p className="forgot-password text-right">
                    Already registered <a href="/signin">sign in?</a>
                    </p>
                </form>
            </div>
            </Col>     
        </Row>
        </div>
    );
}

export default SignUp;