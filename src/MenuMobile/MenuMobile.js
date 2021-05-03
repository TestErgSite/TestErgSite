import "./MenuMobile.scss";
import React from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
import { Link } from "react-router-dom";
import { ChangeLanguageButton } from "../changeLanguageButton/changeLanguageButton";
import { useMediaQuery } from "react-responsive";
import { GetStaerted } from "../get-started-button/GetStaerted";
import { useHistory } from "react-router-dom";

export const MenuMobile = () => {
  const { t } = useTranslation();
  let history = useHistory();

  const MobileMenu = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 375 });
    return isMobile ? children : null;
  };


  return (
    <>
      <MobileMenu>
        <div className="menu-wrapper-mobile">
        <div className="menu-logo-wrapper-mobile">
        <Link to="/">
            <div className="menu-logo-mobile"></div>
        </Link>   
            <div className="menu-close-button-mobile" onClick={history.goBack}></div>
        </div>
        <div className="menu-nav-wrapper-mobile">
        <nav className="menu-nav-mobile">
              <Link to="/platform">
                <div className="platform">{t("platform")}</div>
              </Link>
              <Link to="/about-app">
                <div className="about-app">{t("about-app")}</div>
              </Link>
              <Link to="/study-page">
                <div className="study-page">{t("study-page")}</div>
              </Link>
              <Link to="/get-started">
                <div className="get-started">{t("get-started")}</div>
              </Link>
            
            </nav>
            </div>

            <div className="menu-footer-wrapper-mobile">
            <ChangeLanguageButton />
            <GetStaerted />
            </div>
        </div>
      </MobileMenu>
    </>
  );
};

