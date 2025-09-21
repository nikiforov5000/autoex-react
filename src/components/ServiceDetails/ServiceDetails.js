import { useTranslation } from "react-i18next";
import Carousel from "../Carousel/Carousel";
import "./ServiceDetails.css";

const ServiceDetails = ({ service }) => {
  const { t } = useTranslation();

  return (
    <div className="service-details">
      <div className="service-details-text">
        <h4 className="text-white">{t(`services.${service.id}.title`)}</h4>
        <p className="text-white">{t(`services.${service.id}.description`)}</p>
      </div>
      <Carousel images={service.media} />
    </div>
  );
};

export default ServiceDetails;
