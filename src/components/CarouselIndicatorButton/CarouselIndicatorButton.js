import './CarouselIndicatorButton.css'

const CarouselIndicatorButton = ({ direction, onClick }) => {
  return (
    <button className="button prev" onClick={onClick}>
      <img
        src={`/images/arrow-${direction}.png`}
        alt="placeholder"
        className="placeholder" />
    </button>);
};

export default CarouselIndicatorButton;

