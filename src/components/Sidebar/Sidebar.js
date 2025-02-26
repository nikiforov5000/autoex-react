import React, { useState } from 'react';
import './Sidebar.css';
import SideItem from '../SideItem/SideItem';
import Button from '../Button/Button';


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
          <SideItem color="orange" title="2D & 3D" description="" text="Производство 2D и 3D графики" button="BUTTON" />
          <SideItem color="green" title="Адаптация видео" description="Lhjghgj jh hgjhgh ghjghg hjjhgj" text="texttexttext" />
          <SideItem color="violet" title="Адаптация видео для соцсетей" description="Lhjghgj jh hgjhgh ghjghg hjjhgj" text="texttexttext" />
          <SideItem color="violet" title="Разработка сайтов и лендингов" description="Lhjghgj jh hgjhgh ghjghg hjjhgj" text="texttexttext" />
          <SideItem color="violet" title="Адаптация видеороликов лекарственных препаратов" description="Lhjghgj jh hgjhgh ghjghg hjjhgj" text="texttexttext" />
          <SideItem color="violet" title="Производство аудиороликов" description="Lhjghgj jh hgjhgh ghjghg hjjhgj" text="texttexttext" />

          <Button color="green" link="#" width="normal" text="new button" width="wide" />

        </div>

      </div>
    </div >
  );
};

export default Sidebar;