import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

import SingleConsultants from "./SingleConsultants";

const Consultants = () => {
  const [consultants, setConsultants] = useState([]);

  useEffect(() => {
    fetch("./consultants.json")
      .then((res) => res.json())
      .then((data) => setConsultants(data));
  }, []);

  return (
    <div>
      <h2 className="mt-3">Consultants</h2>
      <Container>
        <Row xs={1} md={3} className="g-4 mt-3">
          {consultants.map((consultants) => (
            <SingleConsultants
              consultants={consultants}
              key={consultants.name}
            ></SingleConsultants>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Consultants;
