import React, { useState } from 'react';
import './Sidebar.css';
import SideItem from '../SideItem/SideItem';


const Sidebar = () => {

  return (
    <div class="right-side">
      <div class="corner"></div>
      <svg width="0" height="0">
        <defs>
          <clipPath id="noise">
            <path d="M0,0 C5,2 10,5 15,3 C20,1 25,4 30,2 C35,0 40,3 45,2 C50,1 55,4 60,3 C65,2 70,5 75,3 C80,1 85,4 90,2 C95,0 100,0 100,0 L100,100 L0,100 Z" />
          </clipPath>
        </defs>
      </svg>
      <div class="wrapper">
        <div class="item-list">

          <SideItem color="orange" title="TITLE" text="texttexttext" button="BUTTON" buttonColor="orange" />

          <div class="item item-1">
            <div class="background-container hover-element">

              <h3 class="text-center text-white">Jlkkll kjjl gkjhllkjj</h3>
              <p class="text-center text-white">Lorem ipsum dolor sit amet consectetur adipisicing </p>
            </div>
            <p class="description text-center text-black">Lhjghgj jh hgjhgh ghjghg hjjhgj</p>
            <a href="#" class="button button-orange">Button</a>
          </div>
          <div class="item item-2">
            <div class="background-container hover-element">

              <h3 class="text-center text-white">Jlkkll kjjl gkjhllkjj</h3>
              <p class="text-center text-white">Lorem ipsum dolor sit amet consectetur adipisicing </p>
            </div>
            <p class="description text-center text-black">Lhjghgj jh hgjhgh ghjghg hjjhgj</p>
          </div>
          <div class="item item-3">
            <div class="background-container hover-element">

              <h3 class="text-center text-white">Jlkkll kjjl gkjhllkjj</h3>
              <p class="text-center text-white">Lorem ipsum dolor sit amet consectetur adipisicing </p>
            </div>
            <p class="description text-center text-black">Lhjghgj jh hgjhgh ghjghg hjjhgj</p>
          </div>
          <a href="#" class="button button-purple button-full-width">Button</a>

        </div>

      </div>
    </div >

  );
};

export default Sidebar;