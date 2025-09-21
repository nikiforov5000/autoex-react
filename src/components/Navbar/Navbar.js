import "./Navbar.css";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <section class="section section-navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <a href="index.html">
            <img
              src="/images/logo-autoex-old.png"
              alt="logo"
              className="logo"
            />
          </a>
        </div>
        <div className="navbar-list">
          <div className="navbar-item">
            <a href={`mailto:${t("navbar.email")}`}>{t("navbar.email")}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
