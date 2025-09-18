import React, { useState } from "react";
import "./Services.css";
import ServiceItem from "../ServiceItem/ServiceItem";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import servicesData from "../../data/services.json";

const Services = () => {
  const services = servicesData.services;

  const [selectedService, setSelectedService] = useState(
    servicesData.services.graphics
  );

  const handleServiceSelect = (serviceKey) => {
    const service = servicesData.services[serviceKey];
    if (service) {
      setSelectedService(service);
    }
  };

  return (
    <section className="section section-services">
      <div className="wrapper">
        <div className="item-list">
          {Object.entries(services).map(([key, service]) => (
            <ServiceItem
              key={key}
              service={service}
              onClick={() => handleServiceSelect(key)}
              isSelected={selectedService === services[key]}
            />
          ))}
        </div>
        <ServiceDetails service={selectedService} />
      </div>
    </section>
  );
};

export default Services;
