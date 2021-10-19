import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ServiceDetails = () => {
  const { serviceName } = useParams();

  return (
    <div>
      <h2>This is {serviceName} </h2>
    </div>
  );
};

export default ServiceDetails;
