import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ServiceCard = ({ service }) => {
  const { setService } = useAuth();

  return (
    <Link to={`/service/${service._id}`} onClick={() => setService(service)}>
      <img
        className="w-60 rounded shadow mx-auto"
        src={service.image}
        alt={service.name}
      />
      <h2 className="text-center w-3/4 mx-auto font-bold text-base mt-3">
        {service.name}
      </h2>
    </Link>
  );
};

export default ServiceCard;
