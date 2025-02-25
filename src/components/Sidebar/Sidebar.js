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

          <SideItem color="orange" title="TITLE" description="Lhjghgj jh hgjhgh ghjghg hjjhgj" text="texttexttext" button="BUTTON" />
          <SideItem color="green" title="TITLE" description="Lhjghgj jh hgjhgh ghjghg hjjhgj" text="texttexttext"  />
          <SideItem color="violet" title="TITLE" description="Lhjghgj jh hgjhgh ghjghg hjjhgj" text="texttexttext"  />

          <a href="#" class="button button-purple button-full-width">Button</a>

        </div>

      </div>
    </div >
  );
};

export default Sidebar;