import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Container className="my-3">
        <Row>
          <Col>
            <img
              src="http://optometrystudents.com/wp-content/uploads/2013/12/aehmduIV.jpg"
              alt="Hospital-pic"
            />
          </Col>
          <Col className="text-start">
            <h1 className="text-primary">A'sons Eye Care</h1>
            <h5>
              With the rapid growth of eye care sector in Bangladesh, a
              specialized hospital for the treatment of all eye related diseases
              was much needed. Thus A'sons Eye Care Ltd. was founded on 18th
              September 2005 with the aim of providing world-class eye care
              service to the community at an affordable cost. Since then, we
              have been able to keep pace with the standards set by the
              international ophthalmology community in relation to outstanding
              patient care as well as the latest in medical advancements.
            </h5>
            <h5>
              With the promise and commitment in eye care, Asons Eye Care Ltd.
              is now serving from 7 branches located in Dhanmondi, Banani,
              Chittagong, Shantinagar, Khulna, Mirpur and a non-profit.
            </h5>
            <h5>
              At present A'sons Eye Care Ltd. have 143 consultants, and over 700
              staffs. All of whom are constantly striving to provide the best
              eye care service to every individual who walks through our doors.
              We invite you with open arms to become better acquainted with
              A'sons Eye Care Ltd. and help us in our journey forwards.
            </h5>
          </Col>
        </Row>
      </Container>

      <Container className="my-4">
        <Row className="bg-info p-3">
          <Col>
            <h5>
              <i class="fas fa-laptop-medical"></i> 9 Years Of Establishment
            </h5>
          </Col>
          <Col>
            <h5>
              <i class="far fa-building"></i> 5 Branches
            </h5>
          </Col>
          <Col>
            <h5>
              <i class="fas fa-users"></i> 250+ Staffs
            </h5>
          </Col>
          <Col>
            <h5>
              <i class="fas fa-user-nurse"></i> 50+ consultants
            </h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
