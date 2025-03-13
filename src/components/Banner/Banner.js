import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <section class="section section-banner">
      <div className="background-image"></div>
      <div className="wrapper">
        <h1 className='text-center text-white'>Autoex</h1>
        <h3 className='text-center text-white'>Production Studio</h3>
        <p className='text-center'>since 2010</p>
      </div>
    </section>
  );
};

export default Banner;