import { useState } from "react";
import './Carousel.css'

const images = [
  "/images/service-display-placeholder.png",
  "https://via.placeholder.com/600x300?text=Image+2",
  "https://via.placeholder.com/600x300?text=Image+3",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  return (
    <div className='service-carousel-container'>
      <div className="carousel">
        <div className="image-container">
          <img src={images[currentIndex]} alt="" />
        </div>
        <div class="carousel-controls-container">
          <div className="indicators">
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
          </div>
          <button className="button prev" onClick={prevImage}><img src="/images/arrow-prev.png" alt="placeholder" className="placeholder" /></button>
          <button className="button next" onClick={nextImage}><img src="/images/arrow-next.png" alt="placeholder" className="placeholder" /></button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;