import { useTranslation } from "react-i18next";
import "./About.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <div class="about">
      <div class="wrapper">
        <h4 className="title">{t("about.title")}</h4>
        <p className="description">{t("about.description")}</p>
      </div>
    </div>
  );
};

export default About;
