
import { useState, useEffect } from "react";
import './Carousel.css'
import CarouselItem from '../CarouselItem/CarouselItem'
import CarouselIndicator from '../CarouselIndicator/CarouselIndicator'
import CarouselIndicatorButton from "../CarouselIndicatorButton/CarouselIndicatorButton";


const Carousel = ({ service }) => {
  const images = service.media;

  useEffect(() => { setCurrentIndex(0); }, [service]);

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
          <CarouselItem
            src={image}
            key={index}
            alt={`Service media ${index} for ${service.title}`} />
        ))}
      </div>
      <div class="carousel-controls-container">
        <div className="indicators">
          {images.map((_, index) => (
            <CarouselIndicator
              isActive={index === currentIndex}
              onClick={() => setCurrentIndex(index)} />
          ))}
        </div>
        <CarouselIndicatorButton
          direction={"prev"}
          onClick={() => prevImage()} />
        <CarouselIndicatorButton
          direction={"next"}
          onClick={() => nextImage()} />
      </div>
    </div>
  );
}

export default Carousel;