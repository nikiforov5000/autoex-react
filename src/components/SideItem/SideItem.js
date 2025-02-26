import React from 'react';
import './SideItem.css';
import Button from '../Button/Button';


const SideItem = ({ color, title, text, description, button, buttonColor }) => {

  return (
    <div className={`item item-${color}`} >
      <div className="item-background-container hover-element">

        <h3 className="text-center text-white">{title}</h3>
        <p className="text-center text-white">{text}</p>
      </div>
      <p className="description text-center text-black">{description}</p>
      {button &&
        <Button color={color} link="#" width="normal" text="new button" />
      }
    </div>
  );
};

export default SideItem;