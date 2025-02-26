import React, { useState } from 'react';
import Button from '../Button/Button';
import './Banner.css';

const Banner = () => {

  return (
    <div class="col col-12 background-container">
      <div class="wrapper">
        <div class="left">
          <div class="">
            <h3 class="text-white">Production Studio</h3>
            <h1 class="text-white">Autoex</h1>
          </div>
          <p class="text-white">
            Мы создаем рекламный контент, который привлекает внимание и работает на результат. С 2010 года мы помогаем брендам выделяться, адаптируя визуальные и аудиоматериалы под любые задачи.
          </p>
          <p class="text-white">
            <br />
            Мы работаем с крупными рекламными агентствами (MacCann Kazakhstan, SEED, MegaMedia и др.) на протяжении многих лет, что подтверждает качество наших услуг. Мы знаем, что сроки работы часто горящие, и мы делаем все возможное, чтобы уложиться в них.
          </p>
          <Button color="purple" link="#" width="normal" text="new button" />
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