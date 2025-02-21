import React, { useState } from 'react';
// import './Navbar.css';

const Banner = () => {

  return (
    <div class="col col-12 background-container">
      <div class="wrapper">
        <div class="left">
          <div class="">
            <h3 class="text-white">Motion Studio</h3>
            <h2 class="text-white">Post Production</h2>
            <h1 class="text-white">Studio</h1>
          </div>
          <p class="text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, aliquam! Fugit amet eos unde, odio nihil inventore rerum in quo, possimus eligendi consequuntur! Et modi architecue, aspernatur temporibus, harum delectus nisi inventore nihil suscipit alias quae? A magnam ut eum! Lorem ipsum dolor sit amet consectetur as fuga animi ipsa nemo.
          </p>
          <div class="button-container"><a href="#" class="button button-purple">Button</a></div>
        </div>
        <div class="right">
          <div class="image-container girl"></div>
          <div class="background-container">
            <h3 class="text-white text-center">some thing</h3>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Banner;