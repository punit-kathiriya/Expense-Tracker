// File name: AddCar.js
// Auth: Punit
// Desc: This file containing code for the Expense Tracker to display the prices

import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { CiCirclePlus } from "react-icons/ci";

export const Home = () => {
  return (
    <>
      <Row className='mt-5'>
      <Col xs={12} md={8}><h1>Expense Tracker App!</h1></Col>
        <Col xs={12} md={4}>
        <Button href="/main"  variant="primary" type="buttton">
            Add Expence <CiCirclePlus />
          </Button>
        </Col>
      </Row>

      <Row className='mt-5'>
        <Col xs={12} md={4} className="mt-2">
          <Card>
            <Card.Body>
              <Card.Title className='header-side'><h2 className='mb-2'>0.00 €</h2>Total Cost</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        
        <Col xs={12} md={4} className="mt-2">
          <Card>
            <Card.Body>
              <Card.Title className='header-side'><h2 className='mb-2'>0.00 €</h2>Total Consumption (in Ltr)</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4} className="mt-2">
          <Card>
            <Card.Body>
              <Card.Title className='header-side'><h2 className='mb-2'>0.00 €</h2>Total Distance (in KM)</Card.Title>
            </Card.Body>
          </Card>
        </Col>
    
        <Col xs={12} md={4} className="mt-2">
          <Card>
            <Card.Body>
              <Card.Title className='header-side'><h2 className='mb-2'>0.00 €</h2>Average Expence per 100km (in €)</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Home;