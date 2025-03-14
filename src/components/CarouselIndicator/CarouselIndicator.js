import './CarouselIndicator.css'

const CarouselIndicator = ({ isActive, onClick }) => {
  return (
    <div
      className={`indicator ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="line"></div>
    </div>
  );
};

export default CarouselIndicator;