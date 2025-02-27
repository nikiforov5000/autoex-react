import React, { useState } from 'react';
import aboutData  from '../../data/about.json';
import './About.css';

const About = () => {
    return (
        <div class="wrapper">
            <div className='col col-9 about'>
                <h2 className='title'>{aboutData.title}</h2>
                <p className='description'>{aboutData.description}</p>
            </div>
        </div>  
    );
};

export default About