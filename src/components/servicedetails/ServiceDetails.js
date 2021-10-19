import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./singleservice.css";

const ServiceDetails = () => {
  const { serviceName } = useParams();

  return (
    <div className="single_service">
      <h2>This is {serviceName} </h2>
    </div>
  );
};

export default ServiceDetails;
