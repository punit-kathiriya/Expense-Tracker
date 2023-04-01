import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

export const SignUp = () => {
    return (
        <Row>
            <Col>
                <img src='https://mdbootstrap.com/img/new/standard/city/044.webp' className='img-fluid shadow-4' alt='...' />
            </Col>
            <Col>
            <div className="Form">
                <form>
                    <h3>Sign Up</h3>
                    <div className="mb-3">
                    <label>First name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                    />
                    </div>
                    <div className="mb-3">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
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
        
    );
}

export default SignUp;