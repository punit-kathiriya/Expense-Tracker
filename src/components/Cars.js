// File name: Cars.js
// Auth: Milla Mäkinen
// Desc: This file containing code for display added Cars

import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { CiEdit , CiCirclePlus} from 'react-icons/ci';
import { FaTrash } from 'react-icons/fa';
import { fetchCarData } from '../api';



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
          <Button href='/editcar' variant='primary' type='buttton'>
            Edit <CiCirclePlus />
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
  const currentUserId = localStorage.getItem('currentUserId');

  useEffect(() => {
    fetchCarData()
      .then(data => setCars(data.filter(car => car.UID === parseInt(currentUserId))))
      .catch(console.error);
  }, [currentUserId]);

  if (cars.length === 0) {
    return (
      <Container>
        <div className='NotAvailable'> 
          <h4>No cars added yet. You can add new car</h4><br></br>
          <Button href='/cars/add' variant='primary' type='buttton'>
            Add Car <CiCirclePlus />
          </Button>
        </div>
      </Container>
    );
  }

  /*
  const handleEdit = (car) => {
    car.preventDefault();
    onEdit(car);
    navigate("/editcar");
  };

  const handleDelete = (id) => {
    id.preventDefault();
    onEdit(id);
    navigate("/car");

  };
  */
  return (
    <Container>
      <div className='CarsPage'>
        <Row>
          <Col>
            <h2>Own Cars</h2>
          </Col>
          <Col class="btn btn-outline-success my-2 my-sm-0">
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
              car={car}
              //onEdit={handleEdit}
              //onDelete={handleDelete}
            />
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Cars;
