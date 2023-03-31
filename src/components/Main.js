import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

export const Main = () => {
  return (
    <Container>
      <Row className='mt-5'>
        <Col xs={12} md={12}>
          <Card>
            <Card.Body>
              <Card.Title className='header-side'>Your Balance :  <span>0.00 €</span></Card.Title>
              {/* <Card.Text>
              0.00€
              </Card.Text> */}
            </Card.Body>
          </Card>

        </Col>
      </Row>
      <Row>
        <Col className='mt-5 expense-data' xs={12} md={12}>
          <h2>Add Expense</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Price of Refueling </Form.Label>
              <Form.Control type="number" min="0" placeholder="Enter Amount 0.00 €" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Total Qty (in liters)</Form.Label>
              <Form.Control type="number" min="0" placeholder="Enter QTY (in ltr)" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Total Distace Driven with refueling (in KM)</Form.Label>
              <Form.Control type="number" min="0" placeholder="Enter Distance Driven (in KM)" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Select your Car</Form.Label>
              <Form.Select className="" aria-label="Default select example" name="cars" id="cars">
                <option>Choose your car!</option>
                <option value="car1">Car 1</option>
                <option value="car2">Car 2</option>
                <option value="car3">Car 3</option>
              </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>

  );
};

export default Main;