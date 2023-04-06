import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CiCirclePlus } from "react-icons/ci";

export const AddCars = () => {
    return ( 
        <>
        <Row>
            <Col className='mt-5 expense-data'>
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
                        Add Car <CiCirclePlus />
                    </Button>
                </Form>
            </Col>
            <Col xs lg="5">
            
            </Col>
        </Row>
        </>
    );
};

export default AddCars;