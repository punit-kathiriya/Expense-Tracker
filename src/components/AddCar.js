import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CiCirclePlus } from "react-icons/ci";
import { useNavigate } from 'react-router';

export const AddCar = () => {
  const [carName, setCarName] = useState('');
  const [carManufacture, setCarManufacture] = useState('');
  const [fuelCapacity, setFuelCapacity] = useState(0);
  const [carBattery, setCarBattery] = useState(0);
  const [isElectric, setIsElectric] = useState(false);
  const navigate = useNavigate();
  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!carName || !carManufacture || fuelCapacity <= 0 || carBattery <= 0) {
      alert('Please fill in all the required fields with valid data.');
      return;
    }
    const formData = { carName, carManufacture, fuelCapacity, carBattery, isElectric };
    navigate('/cars', { state: formData });
  };
  
  return ( 
    <>
      <Row>
        <Col className='mt-5 expense-data'>
          <h2>Add Car</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Car Name </Form.Label>
              <Form.Control type="text" placeholder="Enter Your Car Name" id="name" value={carName} onChange={(e) => setCarName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Car Manufacture</Form.Label>
              <Form.Control type="text" placeholder="Enter Car Manufacture" id='manufacture' value={carManufacture} onChange={(e) => setCarManufacture(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Fuel Capacity (in ltr)</Form.Label>
              <Form.Control type="number" min="0" placeholder="Enter Fuel Capacity (in ltr)" value={fuelCapacity} onChange={(e) => setFuelCapacity(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Car Battery (in %)</Form.Label>
              <Form.Control type="number" min="0" placeholder="Enter Car Battery (in %)" value={carBattery} onChange={(e) => setCarBattery(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Check type="checkbox" id="is-electirc" label="is your car Electric?" checked={isElectric} onChange={(e) => setIsElectric(e.target.checked)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Car <CiCirclePlus />
            </Button>
          </Form>
        </Col>
        <Col xs lg="5"></Col>
      </Row>
    </>
  );
};

export default AddCar;