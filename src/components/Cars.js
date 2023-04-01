import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


export const Cars = () => {
  return (
    <Container>
      <Row className='mt-5'>
        <Col xs={12} md={8}><h1>Car List</h1></Col>
        <Col xs={12} md={4}>
        <Button href="/cars/add" variant="primary" size="lg" type="buttton">
            Add Car
          </Button>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col xs={12} md={4}>
          <Card>
            <Card.Body>
              <Row>
                <Col xs={12} md={8}>
                  <Card.Title className='header-side'><h2 className='mb-2'>Micra</h2>Nissan</Card.Title>
                </Col>
                <Col xs={12} md={4}>
                  <Button href="/car/edit" className='mb-3' variant="primary" size="xs" type="buttton">
                    Edit
                  </Button>
                  <Button href="/car/remove" variant="danger" size="xs" type="buttton">
                    Remove
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>

        </Col>
        <Col xs={12} md={4}>
          <Card>
            <Card.Body>
              <Row>
                <Col xs={12} md={8}>
                  <Card.Title className='header-side'><h2 className='mb-2'>Octavia</h2>Škoda</Card.Title>
                </Col>
                <Col xs={12} md={4}>
                  <Button href="/car/edit" className='mb-3' variant="primary" size="xs" type="buttton">
                    Edit
                  </Button>
                  <Button href="/car/remove" variant="danger" size="xs" type="buttton">
                    Remove
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>

        </Col>
      </Row>
      
      <Row className='mt-2'>
        <Col xs={12} md={12}>
          

        </Col>

      </Row>
      {/* <>
        <div className='Cars'>
          <h1>Cars</h1>
          <h4>Car 1</h4>
          <h4>Car 2</h4>
          <h4>Car 3</h4>
          <form>
            <input type="text" className="Input" placeholder="Write you car name" required /> <br></br>
            <input type="checkbox" required></input>
            <label> Is your car electric?</label><br></br>
            <button type='submit'>Add car +</button>
          </form>
        </div>
      </> */}
    </Container>

  );
};

export default Cars;