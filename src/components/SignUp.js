// File name: SignUp.js
// Auth: Sami Wazni
// Desc: File currently in development containing code for user sign up

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Log from '../images/Log.jpg';
import { AiOutlineLogin } from "react-icons/ai";
import '../App.css';

export const SignUp = () => {
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
                    <h3>Sign Up</h3>
                    <div className="mb-3">
                    <label>Names</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        required
                    />
                    </div>
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
                            required
                            />
                            <label className="custom-control-label" id="check" htmlFor="customCheck1"> 
                            <a href="#" >Accept terms!</a>
                            </label>
                        </div>
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