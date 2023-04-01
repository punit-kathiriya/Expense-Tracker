// File name: SignUp.js
// Auth: Sami Wazni
// Desc: File currently in development containing code for user sign up

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Log from '../images/Log.jpg';

export const SignUp = () => {
    return (
        <div className="LogPages">
        <Row>
            <Col>
                <img src={Log} alt="..." />
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
                    />
                    </div>
                    <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                    </div>
                    <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                    </div>
                    <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Sign Up
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