import "./Footer.scss";
import React from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
import { GetStaerted } from "../get-started-button/GetStaerted";
import { Link } from "react-router-dom";
import { ChangeLanguageButton } from "../changeLanguageButton/changeLanguageButton";
import { scrollUp } from '../utils/scrollUp';
import { useMediaQuery } from "react-responsive";

export const Footer = () => {
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
    <div className="footer-mobile">
      <div className="footer-wrapper-mobile">
        <div className="slogan-wrapper-mobile">
          <span className="slogan-mobile footer-slogan-mobile">{t("psy-comfort-org-header")}</span>
          <Link to="/get-started">
            <GetStaerted />
          </Link>
        </div>
        <div className="footer-info-mobile">
          <div className="footer-info-wrapper-mobile">
           
            <div className="nav-footer">
              <Link to="/platform" onClick={scrollUp} className="platform-link-mobile">
                <div className="platform platform-footer-mobile">{t("platform")}</div>
              </Link>
              <Link to="/about-app" className="about-app-link-mobile">
                <div className="about-app about-app-footer-mobile" onClick={scrollUp}>
                  {t("about-app")}
                </div>
              </Link>
              <Link to="/study-page" onClick={scrollUp} className="study-page-link-mobile">
                <div className="study-page study-page-footer-mobile">{t("study-page")}</div>
              </Link>
              <ChangeLanguageButton/>
            </div>
            <div className="logo-wrapper-mobile">
            <Link to="/">
              <div className="logo">
                <div className="logo-footer-mobile"></div>
              </div>
            </Link>
            <div className="copyright-mobile">
              <span>&#169; 2020 Ergonza</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </MobileHeader>
    <DefaultHeader>
    <div className="footer">
      <div className="footer-wrapper">
        <div className="slogan-wrapper">
          <span className="slogan">{t("psy-comfort-org-header")}</span>
          <Link to="/get-started">
            <GetStaerted />
          </Link>
        </div>
        <div className="footer-info">
          <div className="footer-info-wrapper">
            <Link to="/">
              <div className="logo">
                <div className="logo-footer"></div>
              </div>
            </Link>
            <div className="nav-footer">
              <Link to="/platform" onClick={scrollUp}>
                <div className="platform platform-footer">{t("platform")}</div>
              </Link>
              <Link to="/about-app">
                <div className="about-app about-app-footer" onClick={scrollUp}>
                  {t("about-app")}
                </div>
              </Link>
              <Link to="/study-page" onClick={scrollUp}>
                <div className="study-page study-page-footer">{t("study-page")}</div>
              </Link>
              <Link to="/get-started" onClick={scrollUp}>
                <div className="get-started get-started-footer">
                  {t("get-started")}
                </div>
              </Link>
              <ChangeLanguageButton footer={true}/>
            </div>
            <div className="copyright">
              <span>&#169; 2020 Ergonza</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </DefaultHeader>
    </>
  );
};
