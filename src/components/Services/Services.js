import React, { useState } from 'react';
import './Services.css';
import SideItem from '../SideItem/SideItem';
import Button from '../Button/Button';
import servicesData from '../../data/services.json';


const Services = ({ onServiceSelect }) => {

  const services = servicesData.services;

  return (

    <section class="section section-services">
      <div class="wrapper">
        <div class="item-list">
          {Object.entries(services).map(([key, service]) => (
            <SideItem
              service={service}
              onClick={() => onServiceSelect(key)}
            />
          ))}
        </div>
        <div className="display">
          <img src="/images/service-display-placeholder.png" alt="placeholder" className="placeholder" />
        </div>
        <div className="about-service">
          { }
        </div>
      </div>
    </section>
  );
};

// const Banner = ({ service }) => {


//   return (
//     <section class="section section-banner">
//       <div class="col col-12 background-container">
//         <div class="wrapper">
//           <div class="left">
//             <div class="">
//               <h3 class="text-white">{service.title}</h3>
//             </div>
//             <p class="text-white">
//               {service.description}
//             </p>
//           </div>
//           <div class="right">
//             <div class="image-container girl"><img src="/images/banner-woman.jpg" alt="Pink-purple photo of a girl" /></div>
//             <div class="background-container">
//               <h3 class="text-white text-center">some <br /> thing</h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;

export default Services;