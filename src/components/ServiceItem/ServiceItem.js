import React from 'react';
import './ServiceItem.css';


const ServiceItem = ({ service, onClick, isSelected }) => {

  return (
    <div onClick={onClick} className={`item`} >
      <p className={`text-center text-${isSelected ? "white" : ""}`}>{service.title}</p>
    </div>
  );
};

export default ServiceItem;