import Carousel from '../Carousel/Carousel'
import './ServiceDetails.css'

const ServiceDetails = ({ service }) => {
  return (
    <div className="service-details">
      <div className='service-details-text'>
        <h4 className="text-white">{service.title}</h4>
        <p className="text-white">
          {service.description}
        </p>
      </div>
      <Carousel service={service} />

    </div>
  );
};

export default ServiceDetails;