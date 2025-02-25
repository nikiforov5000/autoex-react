import React from 'react';


const SideItem = ({ color, title, text, description, button, buttonColor }) => {

  return (
    <div class="item item-3" >
      <div class="background-container hover-element">

        <h3 class="text-center text-white">{title}</h3>
        <p class="text-center text-white">{text}</p>
      </div>
      <p class="description text-center text-black">{description}</p>
      <a href="#" class={`button button-${buttonColor}`}>Button</a>
    </div>
  );
};

export default SideItem;