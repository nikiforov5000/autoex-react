import React from 'react';
import Button from '../Button/Button';
import './Banner.css';
import servicesData from '../../data/services.json';

const Banner = ({ service }) => {


  return (
    <div class="col col-12 background-container">
      <div class="wrapper">
        <div class="left">
          <div class="">
            <h3 class="text-white">{service.title}</h3>
          </div>
          <p class="text-white">
            {service.description}
          </p>
        </div>
        <div class="right">
          <div class="image-container girl"><img src="/images/banner-woman.jpg" alt="Pink-purple photo of a girl" /></div>
          <div class="background-container">
            <h3 class="text-white text-center">some <br /> thing</h3>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Banner;