import "./MenuMobile.scss";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
import { Link } from "react-router-dom";
import { ChangeLanguageButton } from "../changeLanguageButton/changeLanguageButton";
import { useMediaQuery } from "react-responsive";
import { ContactUsButton } from "../contact-us-button/ContactUsButton";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Popup } from "../Popup/Popup";
import { PopupDemo } from "../PopupDemo/PopupDemo";
import {
  showPopupAsync,
  hidePopupAsync,
  hidePopupDemoAsync,
  showPopupDemoAsync,
} from "../redux/actions";

export const MenuMobile = () => {
  const { t } = useTranslation();
  let history = useHistory();

  const MobileMenu = useMediaQuery({ query: "(max-width: 428px)" });

  const demo = useSelector((state) => state.demo);
  const url = useSelector((state) => state.url);
  const isActive = useSelector((state) => state.isActive);
  const dispatch = useDispatch();

  const [arrowUp, toggleArrow] = useState(false);

  const toggle = () => {
    toggleArrow(!arrowUp);
  };

  return (
    <>
      {MobileMenu && (
        <div className="menu-wrapper-mobile">
          <div className="menu-content">
            <div
              className={`opacity ${isActive !== "none" ? "overlay" : ""}`}
              onClick={() => dispatch(hidePopupAsync())}
            ></div>
            {isActive === "visible" || "animate" ? <Popup /> : null}

            <div
              className={`opacity ${demo !== "none" ? "overlay" : ""}`}
              onClick={() => dispatch(hidePopupDemoAsync())}
            ></div>
            {demo === "visible" || "animate" ? <PopupDemo /> : null}

            <div className="menu-logo-wrapper-mobile">
              <Link to="/">
                <div className="menu-logo-mobile"></div>
              </Link>
              <div
                className="menu-close-button-mobile"
                onClick={history.goBack}
              ></div>
            </div>
            <div className="menu-nav-wrapper-mobile">
              <nav className="menu-nav-mobile">
                <Link to="/">
                  <div className="home mob-hov">{t("home")}</div>
                </Link>
                <Link to="/platform">
                  <div className="platform mob-hov">{t("platform")}</div>
                </Link>
                <Link to="/study-page">
                  <div className="study-page mob-hov">{t("study-page")}</div>
                </Link>

                <div
                  className="demo mob-hov"
                  onClick={() => dispatch(showPopupDemoAsync(demo))}
                >
                  {t("demo")}
                </div>

                <div className="about-us-mobile mob-hov">
                  <div className="about-us-arrow-mobile" onClick={toggle}>
                    {t("about-us")}
                    <span
                      className={`about-us-arrow ${arrowUp ? "up" : ""}`}
                    ></span>
                  </div>
                  <div
                    className={`about-us-container-mobile ${
                      arrowUp ? "" : "hidden"
                    }`}
                  >
                    <Link to="/methodology">
                      <div className="methodology mob-hov">
                        {t("methodology")}
                      </div>
                    </Link>
                    <Link to="/what-is-ergonza">
                      <div className="what-is-ergonza mob-hov">
                        {t("what-is-ergonza")}
                      </div>
                    </Link>
                    <Link to="/team">
                      <div className="team mob-hov">{t("team")}</div>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>

            <div className="menu-footer-wrapper-mobile">
              <ChangeLanguageButton />
              <ContactUsButton handlePopup={() => dispatch(showPopupAsync())} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
