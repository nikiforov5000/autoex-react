import "./ServiceItem.css";
import { useTranslation } from "react-i18next";

const ServiceItem = ({ service, onClick, isSelected }) => {
  const { t } = useTranslation();

  return (
    <div onClick={onClick} className={`item`}>
      <p className={`text-center text-${isSelected ? "white" : ""}`}>
        {t(`services.${service.id}.title`)}
      </p>
    </div>
  );
};

export default ServiceItem;
