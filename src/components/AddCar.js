
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

export const AddCars = () => {
    return (
        <Container>

            <Row>
                <Col className='mt-5 expense-data' xs={12} md={12}>
                    <h2>Add Car</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Car Name </Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Car Name" id="name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Car Manufacture</Form.Label>
                            <Form.Control type="text" placeholder="Enter Car Manufacture" id='manufacture' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Fuel Capacity (in ltr)</Form.Label>
                            <Form.Control type="number" min="0" placeholder="Enter Fuel Capacity (in ltr)" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Car Bettery (in %)</Form.Label>
                            <Form.Control type="number" min="0" placeholder="Enter Car Bettery (in %)" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Check type="checkbox" id="is-electirc" label="is your car Electic?" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Add Car
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>

    );
};

export default AddCars;