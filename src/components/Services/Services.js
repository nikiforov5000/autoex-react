import React, { useState } from 'react';
import './Services.css';
import ServiceItem from '../ServiceItem/ServiceItem';
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
      <div className='service-carousel-container'>
        <div className="carousel">
          <img src="/images/service-display-placeholder.png" alt="placeholder" className="placeholder" />
        </div>
        <div className='carousel-controls-container'>
          <div className="indicators">
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
          </div>
          <div className="button prev">
            <img src="/images/arrow-prev.png" alt="placeholder" className="placeholder" />
          </div>
          <div className="button next">
            <img src="/images/arrow-next.png" alt="placeholder" className="placeholder" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;