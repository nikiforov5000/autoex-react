import './CarouselItem.css'

const CarouselItem = ({ src, alt }) => {
  return (
    <div className="image-container" >
      <img className={``} src={src} alt="" />
    </div>
  );
}

export default CarouselItem;