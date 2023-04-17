import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { CiCircleMinus } from 'react-icons/ci';
import { CiEdit } from 'react-icons/ci';
import { CiCirclePlus } from 'react-icons/ci';
import { useLocation } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { fetchCarData } from '../api';

/// car: for creating cars, onEdit: if user edit function, onDelete if user delete a car ///
const CarCard = ({ car, onEdit, onDelete }) => {
  const { ID, Manufacturer, Model, Tank, Battery, Is_Electric } = car;
  return (
  <Col sm={6} md={4} lg={3} className="mb-4">
    <Card>
      <Card.Body>
        <Card.Title>{Manufacturer} {Model}</Card.Title>
        {Is_Electric ? (
          <p>Battery: {Battery}%</p>
        ) : (
          <p>Tank: {Tank} L</p>
        )}
        <Button variant="primary" onClick={() => onEdit(car)}>
          <FaEdit /> Edit
        </Button>{' '}
        <Button variant="danger" onClick={() => onDelete(ID)}>
          <FaTrash /> Delete
        </Button>
      </Card.Body>
    </Card>
  </Col>
  );
};

export const Cars = () => {
  const [cars, setCars] = useState([]);

// This lines will get the data from the api
  useEffect(() => {
    fetchCarData()
      .then(data => setCars(data))
      .catch(console.error);
  }, []);
    
  return (
    <Container>
    <div className='CarsPage'>
      <Row>
        <Col>
          <h2>Own Cars</h2>
        </Col>
        <Col >
          <Button href='/cars/add' variant='primary' type='buttton'>
            Add Car
          </Button>
        </Col>
        </Row>
      </div>

      <div className="Cars">
        <Row>
          {cars.map(car => (
          <CarCard
            key={car.ID}
          // get the car
            car={car}
          />
          ))}
      </Row>
    </div>
    </Container>
  );
};

export default Cars;
