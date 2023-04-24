// File name: Dashboard.js
// Auth: Punit
// Desc: This file containing code for the Expense Tracker to display the prices

import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button } from 'react-bootstrap';
import { CiCirclePlus } from "react-icons/ci";
import { fetchCarData } from '../api';


export const Dashboard = () => {
  const [total, setTotal] = useState([]);
  const [car, setCar] = useState([]);
  const currentUserId = localStorage.getItem('currentUserId');

  useEffect(() => {
    fetchCarData()
      .then(data => setCar(data.filter(car => car.UID === parseInt(currentUserId))))
      .catch(console.error);
  }, [currentUserId]);


  useEffect(() => {
    fetch("http://localhost:4000/api/mileage_prices")
      .then((response) => response.json())
      .then((data) => setTotal(data));
  }, []);

  let carsData = [];

  car.map((items) => carsData.push(items.ID));


  let totalcost = 0;

  total.map((items) => (
    (carsData.includes(items.CID)) ?
      totalcost += items.Total_price 
    : null ) );

  let totalConsumption = 0;
  total.map((items) => (
    (carsData.includes(items.CID)) ?
    totalConsumption += items.Total_filled 
    : null ) );

  let totalDistance = 0;
  total.map((items) => (
    (carsData.includes(items.CID)) ?
    totalDistance += items.Total_distance 
    : null ) );

  let totalAverage = ((totalcost * 100) / totalDistance).toFixed(2);;


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
              <Card.Title className='header-side'><h2 className='mb-2'>{totalcost} €</h2>Total Cost</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        
        <Col xs={12} md={4} className="mt-2">
          <Card>
            <Card.Body>
              <Card.Title className='header-side'><h2 className='mb-2'>{totalConsumption} ltr.</h2>Total Consumption (in Ltr)</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4} className="mt-2">
          <Card>
            <Card.Body>
              <Card.Title className='header-side'><h2 className='mb-2'>{totalDistance} KM</h2>Total Distance (in KM)</Card.Title>
            </Card.Body>
          </Card>
        </Col>
    
        <Col xs={12} md={4} className="mt-2">
          <Card>
            <Card.Body>
              <Card.Title className='header-side'><h2 className='mb-2'>{totalAverage} €</h2>Average Expence per 100km (in €)</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Dashboard;