import React from "react";
import { Card, Col } from "react-bootstrap";
import "./singleconsultants.css";

const SingleConsultants = (props) => {
  const { name, img, degree, specialist } = props.consultants;
  return (
    <div>
      <Col className="shadow p-3 mb-5 bg-body">
        <Card>
          <Card.Img variant="top" src={img} className="card-img" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{degree}</Card.Text>
            <Card.Text>{specialist}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default SingleConsultants;
