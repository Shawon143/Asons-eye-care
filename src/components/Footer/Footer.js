import React from "react";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="bg-primary p-4 text-light text-start">
        <Row>
          <Col className="p-5">
            <h1>Asons Eye Care</h1>
          </Col>
          <Col className="d-flex justify-content-center">
            <div>
              <h5>Useful Links</h5>
              <ul>
                <li>
                  <i className="fab fa-facebook"></i> Facebook
                </li>
                <li>
                  <i className="fab fa-instagram"></i> Instragram
                </li>
                <li>
                  <i className="fas fa-envelope-square"></i> Email
                </li>
                <li>
                  <i className="fab fa-youtube"></i> Youtube
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <p className="mt-2 text-center">Copyright © A'sons Eye Care 2021 </p>
      </div>
    </>
  );
};

export default Footer;
