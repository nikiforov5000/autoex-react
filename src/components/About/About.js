import aboutData from '../../data/about.json';
import './About.css';

const About = () => {
  return (
    <div class="about">
      <div class="wrapper">
        <h4 className='title'>{aboutData.title}</h4>
        <p className='description'>{aboutData.description}</p>
      </div>
    </div>
  );
};

export default About