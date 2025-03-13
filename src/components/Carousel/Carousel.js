import { useState } from "react";
import './Carousel.css'


const Carousel = ({ service }) => {
  const images = service.media;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }

  return (
    <div className='service-carousel-container'>
      <div className="carousel" style={{
        transform: `translateX(-${currentIndex * 100}%)`
      }}>
        {images.map((image, index) => (
          <div className="image-container">
            <img className={``} src={image} alt="" />
          </div>
        ))}
      </div>
      <div class="carousel-controls-container">
        <div className="indicators">
          {images.map((_, index) => (
            <div className={`indicator ${currentIndex === index ? "active" : ""}`}></div>
          ))}
        </div>
        <button className="button prev" onClick={prevImage}><img src="/images/arrow-prev.png" alt="placeholder" className="placeholder" /></button>
        <button className="button next" onClick={nextImage}><img src="/images/arrow-next.png" alt="placeholder" className="placeholder" /></button>
      </div>
    </div>
  );
}

export default Carousel;