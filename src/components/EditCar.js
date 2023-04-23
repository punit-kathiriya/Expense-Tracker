// File name: EditCar.js
// Auth: Milla Mäkinen
// Desc: This file is to edit your already existing Cars

import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router';
import addCar from '../images/addCar.jpg';

const EditCar = ({ car, onSubmit, onDelete }) => {
    const [isElectric, setIsElectric] = useState(car.is_electric);
    const navigate = useNavigate();
    const { id } = useParams();

    // // Fetch car data
    // const fetchCarData = () => {
    //     fetch('http://localhost:4000/api/cars')
    //         .then(response => response.json())
    //         .then(data => setCars(data))
    //         .catch(console.error);
    // };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validation code...
        const batteryInput = event.target.elements.battery;
        const batteryValue = parseInt(batteryInput.value);

        const tankInput = event.target.elements.tank;
        const tankValue = parseInt(tankInput.value);

        if (batteryValue < 0 || batteryValue > 100) {
            alert("Battery percentage should be between 0 and 100.");
            batteryInput.focus();
            return;
        }

        if (tankValue < 0 || tankValue > 200) {
            alert("Fuel capacity must be between 0 and 200 liters");
            tankInput.focus();
            return;
        }

        const formData = new FormData(event.target);
        const updatedCar = {
            id: car.id,
            manufacturer: formData.get('manufacturer'),
            model: formData.get('model'),
            tank: parseInt(formData.get('tank')),
            battery: parseInt(formData.get('battery')),
            is_electric: isElectric,
        };

        onSubmit(updatedCar);
        navigate('/cars');
        alert('Car updated successfully');
    };

    const handleDelete = () => {
        onDelete(car.id);
        navigate('/cars');
        alert('Car deleted successfully');
    };

    const handleCheckboxChange = () => {
        setIsElectric(!isElectric);
    };

    
return (
    <Row className="justify-content-md-center">
      <Col md={6}>
        <Card>
          <Card.Header>
            <h3>Edit Car</h3>
          </Card.Header>
          <Card.Body>
            {/* Form code... */}
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" type="submit" className="mr-2">
              <FaSave /> Save
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
  };
  
  export default EditCar;