import "./Header.scss";
import React from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
import { Link } from "react-router-dom";
import { ChangeLanguageButton } from "../changeLanguageButton/changeLanguageButton";
import { useMediaQuery } from "react-responsive";

export const Header = () => {
  const { t } = useTranslation();

  const MobileHeader = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 375 });
    return isMobile ? children : null;
  };

  const DefaultHeader = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 376 });
    return isNotMobile ? children : null;
  };

  return (
    <>
      <MobileHeader>
        <div className="header-mobile">
          <div className="header-wrapper-mobile">
            <Link to="/">
              <div className="logo-mobile">
                <div className="logo-icon-mobile"></div>
              </div>
            </Link>
            <Link to="/menu" className="menu-mobile">
            <div className="burger-button-mobile"></div>
            </Link>
          </div>
        </div>
      </MobileHeader>

      <DefaultHeader>
        <div className="header">
          <div className="header-wrapper">
            <Link to="/">
              <div className="logo">
                <div className="logo-icon"></div>
              </div>
            </Link>
            <nav className="nav">
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
              <ChangeLanguageButton />
            </nav>
          </div>
        </div>
      </DefaultHeader>
    </>
  );
};

