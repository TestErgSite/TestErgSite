import "./Header.scss";
import React from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
import { Link } from "react-router-dom";
import { ChangeLanguageButton } from "../changeLanguageButton/changeLanguageButton";
import { useMediaQuery } from "react-responsive";
import { useSelector, useDispatch } from 'react-redux'
import { showPopupAsync, hidePopupAsync } from '../redux/actions'

export const Header = () => {
  const { t } = useTranslation();

  const DefaultHeader = useMediaQuery({ query: '(min-width: 376px)' });
  const MobileHeader = useMediaQuery({ query: '(max-width: 375px)' });

  const isActive = useSelector((state) => state.isActive);
  const dispatch = useDispatch();
 
  return (
    <>
      {MobileHeader &&
        <div className="header-mobile">
        <div className={`opacity ${isActive !== "none" ? "overlay" : ""}`} onClick={() => dispatch(hidePopupAsync())}></div>
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
    }

      {DefaultHeader &&
        <div className="header">
        <div className={`opacity ${isActive !== "none" ? "overlay" : ""}`} onClick={() => dispatch(hidePopupAsync())}></div>
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
              <Link to="/demo">
                <div className="demo">{t("demo")}</div>
              </Link>
                <div className="contact-us" onClick={() => dispatch(showPopupAsync(isActive))}>{t("contact-us")}</div>
              <ChangeLanguageButton />
            </nav>
          </div>
        </div>
      }
    </>
  );
};

