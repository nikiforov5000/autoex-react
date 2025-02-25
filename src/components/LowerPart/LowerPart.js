import React, { useState } from 'react';
import './LowerPart.css';
import middlewareWrapper from 'cors';


const LowerPart = () => {

  return (
    <div class="wrapper lower-part">
      <div class="col col-12 col-wrapper">
        <div class="col col-7">
          <div class="left">
            <h2>Motion</h2>
            <p class="description">Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam porro assumenda accusamus et, cumque, iusto, eligendi praesentium esse atque laudantium odio ex mollitia. Eos soluta neque quisquam aperiam, quia obcaecati?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda illo fugit accusamus dolores voluptate minima mollitia deleniti unde non explicabo atque commodi asperiores vero, consequuntur totam blanditiis culpa nihil ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe explicabo consectetur sint? Numquam temporibus corrupti eos sed possimus eligendi similique, exercitationem, repellat itaque neque quo voluptatum tempora explicabo error in? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia officiis veniam modi nisi aut ipsa asperiores, nemo sunt maiores facere molestiae ipsam, quae, vero illum veritatis exercitationem facilis sapiente distinctio.</p>
            <div class="button-container"><a href="#" class="button button-green">Button</a></div>
          </div>
        </div>
        <div class="col col-5">
          <div class="right">
            <img src="/images/purple-screen.png" alt="purple colored image with screens" />
            <p class="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div class="button-container"><a href="#" class="button button-orange">Button</a></div>
          </div>
        </div>

      </div>
    </div>

  );
};

export default LowerPart;