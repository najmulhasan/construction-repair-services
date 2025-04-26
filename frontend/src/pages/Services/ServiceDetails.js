import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import AcMaintenance from "./AcMaintenance";

const ServiceDetails = () => {
  const { id } = useParams();

  const { service, setService } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/service/${id}`);
        const result = await response.json();
        setService(result);
      } catch (error) {
        fetchData();
      }
    };
    fetchData();
  }, [id, setService]);

  return (
    <div>
      <div className="container mx-auto p-2">
        <h1 className="text-xl lg:text-3xl my-5 lg:my-10 font-bold">
          {service.name}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="">
            <img
              className="max-w-full mx-auto rounded-xl shadow"
              src={service.image}
              alt={service.name}
            />
            <h2 className="font-bold text-xl mt-10 py-2">Service Overview</h2>
            <p className="text-justify">{service.description}</p>
          </div>

          <div className="">
            <h2 className="font-bold text-xl mt-10 py-2">Service Details</h2>
            <AcMaintenance />
            <p className="text-justify">{service.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
