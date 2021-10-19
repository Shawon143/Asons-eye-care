import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./singleservice.css";

const SingleService = (props) => {
  const { name, img, Description } = props.service;
  return (
    <div>
      <Col className="shadow p-3 mb-5 bg-body">
        <Card>
          <Card.Img variant="top" src={img} className="card-img" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{Description.slice(0, 110)}</Card.Text>
            <Card.Text>
              <Link to={`/service/${name}`}>
                <Button>
                  Read More <i class="fas fa-arrow-right"></i>
                </Button>
              </Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default SingleService;
