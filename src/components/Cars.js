import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CiCircleMinus } from 'react-icons/ci';
import { CiEdit } from 'react-icons/ci';
import { CiCirclePlus } from 'react-icons/ci';
import { useLocation } from 'react-router-dom';

export const Cars = () => {
  const location = useLocation();
  const formData = location.state;

  // Array of cars that were added from the form
  const [addedCars, setAddedCars] = useState(formData ? [formData] : []);

  const handleRemove = (id) => {
    setAddedCars(addedCars.filter((car) => car.id !== id));
  };

  return (
    <>
      <Row className='mt-5'>
        <Col xs={12} md={8}>
          <h1>Car List</h1>
        </Col>
        <Col xs={12} md={4}>
          <Button href='/cars/add' variant='primary' type='buttton'>
            Add Car <CiCirclePlus />
          </Button>
        </Col>
      </Row>
      {addedCars.length > 0 && (
        <Row className='mt-5'>
          {addedCars.map((car, index) => (
            <Col key={index} xs={12} md={4}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col xs={12} md={8}>
                      <Card.Title className='header-side'>
                        <h2 className='mb-2'>{car.carName}</h2>
                        {car.carManufacture}
                      </Card.Title>
                    </Col>
                    <Col xs={12} md={4}>
                      <Button
                        href={`/car/edit/${car.id}`}
                        className='mb-3'
                        variant='primary'
                        size='xs'
                        type='button'
                      >
                        Edit <CiEdit />
                      </Button>
                      <Button
                        variant='danger'
                        size='xs'
                        type='button'
                        onClick={() => handleRemove(car.id)}
                      >
                        Remove <CiCircleMinus />
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Cars;
