import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { CiCirclePlus } from "react-icons/ci";
import { useNavigate } from 'react-router';
import addCar from '../images/addCar.jpg';

export const AddCar = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [isElectric, setIsElectric] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event);
    navigate("/cars");
    alert("Car added successfully");
  };

  const handleCheckboxChange = () => {
    setIsElectric(!isElectric);
  };
  
  return ( 
    <div className="AddCarForm">
      <Row>
        <Col>
          <div className="AddForm">
          <h3>Add Car</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Car Manufacture</label>
              <input 
              type="text" 
              className="form-control" 
              placeholder="Manufacture" 
              required 
              name="manufacturer" />
            </div>
            <div className="mb-3">
              <label>Model</label>
              <input 
              type="text" 
              className="form-control" 
              placeholder="Model" 
              required 
              name="model" />
            </div>
            <div className="mb-3">
              <label>Fuel Capacity (in ltr)</label>
              <input 
              type="number" 
              className="form-control" 
              placeholder="0"
              required 
              disabled={isElectric}
              name="tank" />
            </div>
            <div className="mb-3">
              <label>Car Battery (in %)</label>
              <input 
              type="number" 
              className="form-control" 
              placeholder="0" 
              required 
              name="battery" 
              disabled={!isElectric} />
            </div>
            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input 
                type="checkbox" 
                className="custom-control-input" 
                checked={isElectric}
                id="customCheck1" onChange={handleCheckboxChange} 
                name="is_electric"
                />
                <label className="custom-control-label" 
                id="check" 
                htmlFor="customCheck1">
                  is your car Electric?
                </label>
              </div>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Add Car <CiCirclePlus />
              </button>
            </div>
          </form>
        </div>
      </Col>
      <Col>
        <img src={addCar} alt="..." />
      </Col>
    </Row>
  </div>
  );
};

export default AddCar;