import React, { useState } from 'react';
import './Services.css';
import ServiceItem from '../ServiceItem/ServiceItem';
import Carousel from '../Carousel/Carousel'
import servicesData from '../../data/services.json';


const Services = ({ onServiceSelect }) => {

  const services = servicesData.services;

  const [selectedService, setSelectedService] = useState(servicesData.services.audio);

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


const ServiceDetails = ({ service }) => {
  return (
    <div className="service-details">
      <div className='service-details-text'>
        <h4 className="text-white">{service.title}</h4>
        <p className="text-white">
          {service.description}
        </p>
      </div>
      <Carousel service={service} />

    </div>
  );
};

export default Services;