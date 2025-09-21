import "./Footer.css";
import { useTranslation } from "react-i18next";

const date = new Date();

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="section section-footer">
      <div className="wrapper">
        <p>&copy;{` ${date.getFullYear()} ${t("footer.legal")}`}</p>
      </div>
    </div>
  );
};

export default Footer;
