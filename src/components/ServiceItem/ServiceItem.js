import React from 'react';
import './ServiceItem.css';


const ServiceItem = ({ service, onClick }) => {

  return (
    <div onClick={onClick} className={`item`} >
      <p className="text-center">{service.title}</p>
    </div>
  );
};

export default ServiceItem;