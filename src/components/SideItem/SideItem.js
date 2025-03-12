import React from 'react';
import './SideItem.css';


const SideItem = ({ service, onClick }) => {

  return (
    <div onClick={onClick} className={`item`} >
      <p className="text-center">{service.title}</p>
    </div>
  );
};

export default SideItem;