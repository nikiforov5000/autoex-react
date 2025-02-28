import React, { useState } from 'react';
import './Services.css';
import SideItem from '../SideItem/SideItem';
import Button from '../Button/Button';
import servicesData from '../../data/services.json';


const Services = ({ onServiceSelect }) => {

  const services = servicesData.services;

  return (
    <div class="right-side">
      {/* <div class="corner"></div> */}
      <svg width="0" height="0">
        <defs>
          <clipPath id="noise">
            <path d="M0,0 C5,2 10,5 15,3 C20,1 25,4 30,2 C35,0 40,3 45,2 C50,1 55,4 60,3 C65,2 70,5 75,3 C80,1 85,4 90,2 C95,0 100,0 100,0 L100,100 L0,100 Z" />
          </clipPath>
        </defs>
      </svg>
      <div class="wrapper">
        <div class="item-list">
          {Object.entries(services).map(([key, service]) => (
            <SideItem
              service={service}
              onClick={() => onServiceSelect(key)}
            />
          ))}

        </div>

      </div>
    </div >
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