import React, { useState } from 'react';
import './Services.css';
import SideItem from '../SideItem/SideItem';
import Button from '../Button/Button';
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

    <section class="section section-services">
      <div class="wrapper">
        <div class="item-list">
          {Object.entries(services).map(([key, service]) => (
            <SideItem
              key={key}
              service={service}
              onClick={() => handleServiceSelect(key)}
            />
          ))}
        </div>
        <div className="service-description">
          <ServiceDetails service={selectedService}/>
          <img src="/images/service-display-placeholder.png" alt="placeholder" className="placeholder" />
        </div>
      </div>
    </section>
  );
};


const ServiceDetails = ({ service }) => {
  return (
    <div class="left">
      <div class="">
        <h3 class="text-white">{service.title}</h3>
      </div>
      <p class="text-white">
        {service.description}
      </p>
    </div>
  );
};

export default Services;