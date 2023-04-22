import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import { CiCirclePlus } from "react-icons/ci";

export const Main = ({ onSubmit }) => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState([]);
  const navigate = useNavigate();
  const [Total_filled, setTotal_filled] = useState("");
  const [Total_price, setTotal_price] = useState("");
  const [Total_distance, setTotal_distance] = useState("");
  const [CID, setCID] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/cars")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    const UID = localStorage.getItem('currentUserId');

    fetch("http://localhost:4000/api/mileage_prices", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ UID }),
    })
      .then((response) => response.json())
      .then((total) => setTotal(total))
      .catch(console.error);
  
  }, []);

  let sum = 0;

  total.map((items) => (sum += items.Total_price));

  const handleSubmit = (event) => {
    event.preventDefault();
    const priceing = {
      Total_filled: Total_filled,
      Total_price: Total_price,
      Total_distance: Total_distance,
      CID: CID,
    };

    onSubmit(priceing);

    console.log(priceing);
  };

  return (
    <>
      <Row className="mt-5">
        <Col xs={12} md={12}>
          <Card>
            <Card.Body>
              <Card.Title className="header-side">
                Your Total Expense : <span>{sum}€</span>
              </Card.Title>
              {/* <Card.Text>
              0.00
              </Card.Text> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="mt-5 expense-data">
          <h2>Add Expense</h2>
          <Form onSubmit={handleSubmit} action="#">
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Price of Refueling </Form.Label>
              <Form.Control
                type="number"
                name="Total_filled"
                value={Total_filled}
                onChange={(e) => setTotal_filled(e.target.value)}
                min="0"
                placeholder="Enter Amount 0.00 €"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Total Qty (in liters)</Form.Label>
              <Form.Control
                type="number"
                name="Total_price"
                value={Total_price}
                onChange={(e) => setTotal_price(e.target.value)}
                min="0"
                placeholder="Enter QTY (in ltr)"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>
                Total Distace Driven with refueling (in KM)
              </Form.Label>
              <Form.Control
                type="number"
                name="Total_distance"
                value={Total_distance}
                onChange={(e) => setTotal_distance(e.target.value)}
                min="0"
                placeholder="Enter Distance Driven (in KM)"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Select your Car</Form.Label>
              <Form.Select
                className=""
                name="CID"
                onChange={(e) => setCID(e.target.value)}
                aria-label="Default select example"
                id="cars"
              >
                <option value="">Choose your car!</option>
                {data.map((item) => (
                  <option value={item.ID}>
                    {item.Manufacturer} {item.Model}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit">
              Add Expense <CiCirclePlus />
            </Button>
          </Form>
        </Col>

        <Col xs lg="5"></Col>
      </Row>
    </>
  );
};
