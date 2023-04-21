// File name: Cars.js
// Auth: Milla Mäkinen
// Desc: This file containing code for display added Cars

import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { CiEdit , CiCirclePlus} from 'react-icons/ci';
import { FaTrash } from 'react-icons/fa';
import { fetchCarData } from '../api';

/// car: for creating cars, onEdit: if user edit function, onDelete if user delete a car ///
const CarCard = ({ car, onEdit, onDelete }) => {
  const { ID, Manufacturer, Model, Tank, Battery, Is_Electric } = car;
  return (
  <Col xs={12} md={4} className="mb-4">
    <Card>
      <Card.Body>
        <Card.Title>{Manufacturer} {Model}</Card.Title>
        {Is_Electric ? (
          <p>Battery: {Battery}%</p>
        ) : (
          <p>Tank: {Tank} L</p>
        )}
        <Button variant="primary" onClick={() => onEdit(car)}>
          <CiEdit /> Edit
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
            Add Car <CiCirclePlus />
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
