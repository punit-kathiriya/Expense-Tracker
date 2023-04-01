import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Cars = () => {
  return (
    <>
      <Row className='mt-5'>
        <Col xs={12} md={8}><h1>Car List</h1></Col>
        <Col xs={12} md={4}>
        <Button href="/cars/add" variant="primary" size="lg" type="buttton">
            Add Car
          </Button>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col xs={12} md={4}>
          <Card>
            <Card.Body>
              <Row>
                <Col xs={12} md={8}>
                  <Card.Title className='header-side'><h2 className='mb-2'>Micra</h2>Nissan</Card.Title>
                </Col>
                <Col xs={12} md={4}>
                  <Button href="/car/edit" className='mb-3' variant="primary" size="xs" type="buttton">
                    Edit
                  </Button>
                  <Button href="/car/remove" variant="danger" size="xs" type="buttton">
                    Remove
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>

        </Col>
        <Col xs={12} md={4}>
          <Card>
            <Card.Body>
              <Row>
                <Col xs={12} md={8}>
                  <Card.Title className='header-side'><h2 className='mb-2'>Octavia</h2>Škoda</Card.Title>
                </Col>
                <Col xs={12} md={4}>
                  <Button href="/car/edit" className='mb-3' variant="primary" size="xs" type="buttton">
                    Edit
                  </Button>
                  <Button href="/car/remove" variant="danger" size="xs" type="buttton">
                    Remove
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>

        </Col>
      </Row>
    </>
  );
};

export default Cars;