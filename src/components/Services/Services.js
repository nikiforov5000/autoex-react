import { useState } from "react";
import "./Services.css";
import ServiceItem from "../ServiceItem/ServiceItem";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import { services } from "../../data/services";

const Services = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  const handleServiceSelect = (index) => {
    const service = services[index];
    if (service) {
      setSelectedService(service);
    }
  };

  return (
    <section className="section section-services">
      <div className="wrapper">
        <div className="item-list">
          {services.map((service, index) => (
            <ServiceItem
              key={service.id}
              service={service}
              onClick={() => handleServiceSelect(index)}
              isSelected={selectedService === services[index]}
            />
          ))}
        </div>
        <ServiceDetails service={selectedService} />
      </div>
    </section>
  );
};

export default Services;
