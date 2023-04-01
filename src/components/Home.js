import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const Home = () => {
  return (
    <>
      <Row className='mt-5'>
      <Col xs={12} md={8}><h1>Expense Tracker App!</h1></Col>
        <Col xs={12} md={4}>
        <Button href="/main"  variant="primary" size="lg" type="buttton">
            Add Expence
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