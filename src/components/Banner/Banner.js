import "./Banner.css";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <section class="section section-banner">
      <div className="background-image"></div>
      <div className="wrapper">
        <h1 className="text-center text-white">{t("banner.title")}</h1>
        <h3 className="text-center text-white">{t("banner.subline1")}</h3>
        <p className="text-center">{t("banner.subline2")}</p>
      </div>
    </section>
  );
};

export default Banner;
