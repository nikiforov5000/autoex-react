import aboutData  from '../../data/about.json';
import './About.css';

const About = () => {
  return (
    <div class="about">
      <div class="wrapper">
        <h2 className='title'>{aboutData.title}</h2>
        <p className='description'>{aboutData.description}</p>
      </div>
    </div>
  );
};

export default About