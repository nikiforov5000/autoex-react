import React from 'react';
import './SideItem.css';
import Button from '../Button/Button';


const SideItem = ({ service, onClick }) => {

  return (
    <div onClick={onClick} className={`item item-orange`} >
      <div className="item-background-container">
        <h4 className="text-center text-white">{service.title}</h4>
      </div>
    </div>
  );
};

export default SideItem;