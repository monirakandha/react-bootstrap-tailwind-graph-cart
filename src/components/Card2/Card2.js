import React from 'react';
import { Card , Col, Row  } from 'react-bootstrap';

const Card2 = (props) => {
    const {name } = props.product;
    return (

        <Row>
        <Col sm={8}>
        <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title : {name}</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card></Col>
        <Col sm={4}>sm=4</Col>
      </Row>

    );
};

export default Card2;