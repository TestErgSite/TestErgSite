import "./Footer.scss";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
import { DemoButton } from "../demo-button/DemoButton";
import { Link } from "react-router-dom";
import { ChangeLanguageButton } from "../changeLanguageButton/changeLanguageButton";
import { scrollUp } from "../utils/scrollUp";
import { useMediaQuery } from "react-responsive";
import { ContactUsButton } from "../contact-us-button/ContactUsButton";
import { useSelector, useDispatch } from "react-redux";
import {
  showPopupAsync,
  hidePopupAsync,
  showPopupDemoAsync,
  hidePopupDemoAsync,
} from "../redux/actions";

export const Footer = () => {
  const DefaultFooter = useMediaQuery({ query: "(min-width: 429px)" });
  const MobileFooter = useMediaQuery({ query: "(max-width: 428px)" });

  const { t } = useTranslation();

  const url = useSelector((state) => state.url);
  const isActive = useSelector((state) => state.isActive);
  const dispatch = useDispatch();
  const demo = useSelector((state) => state.demo);

  const [navs, setHover] = useState({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
  });

  const handleHover = (i) => {
    setHover({
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      ...{
        [i]: true,
      },
    });
  };

  const handleHoverOff = () => {
    setHover({
      1: true,
      2: true,
      3: true,
      4: true,
      5: true,
      6: true,
    });
  };

  return (
    <>
      {MobileFooter && (
        <div className="footer-mobile">
          <div
            className={`opacity ${isActive !== "none" ? "overlay" : ""}`}
            onClick={() => dispatch(hidePopupAsync())}
          ></div>
           <div
            className={`opacity ${demo !== "none" ? "overlay" : ""}`}
            onClick={() => dispatch(hidePopupDemoAsync())}
          ></div>
          <div className="footer-wrapper-mobile">
            <div className="slogan-wrapper-mobile">
              <div className="slogan-mobile footer-slogan-mobile">
                {t("try-in-action")}
              </div>
              <div className="mobile-buttons">
                <DemoButton />

                <ContactUsButton
                  handlePopup={() => dispatch(showPopupAsync())}
                />
              </div>
            </div>
            <div className="footer-info-mobile">
              <div className="footer-info-wrapper-mobile">
                <div className="nav-footer">
                  <Link to="/" onClick={scrollUp} className="home-link-mobile">
                    <div className="home home-footer-mobile">{t("home")}</div>
                  </Link>
                  <Link
                    to="/platform"
                    onClick={scrollUp}
                    className="platform-link-mobile"
                  >
                    <div className="platform platform-footer-mobile">
                      {t("platform")}
                    </div>
                  </Link>
                  <Link to="/about-app" className="about-app-link-mobile">
                    <div
                      className="about-app about-app-footer-mobile"
                      onClick={scrollUp}
                    >
                      {t("about-app")}
                    </div>
                  </Link>
                  <Link
                    to="/study-page"
                    onClick={scrollUp}
                    className="study-page-link-mobile"
                  >
                    <div className="study-page study-page-footer-mobile">
                      {t("study-page")}
                    </div>
                  </Link>

                  <ChangeLanguageButton footerMobile={true} />
                </div>
                <div className="logo-wrapper-mobile">
                  <Link to="/">
                    <div className="logo-footer-mobile-wrapper">
                      <div className="logo-footer-mobile"></div>
                    </div>
                  </Link>
                  <div className="copyright-mobile">
                    <div className="ergonza-2020-mobile">
                      &#169; 2020 Ergonza
                    </div>
                    <div className="ergonza-mail">info@ergonza.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {DefaultFooter && (
        <div className="footer">
          <div
            className={`opacity ${isActive !== "none" ? "overlay" : ""}`}
            onClick={() => dispatch(hidePopupAsync())}
          ></div>
          <div
            className={`opacity ${demo !== "none" ? "overlay" : ""}`}
            onClick={() => dispatch(hidePopupDemoAsync())}
          ></div>

          <div className="footer-wrapper">
            <div className="slogan-wrapper">
              <div className="slogan">{t("try-in-action")}</div>
              <div className="footer-buttons">
                <DemoButton />
                <ContactUsButton
                  handlePopup={() => dispatch(showPopupAsync())}
                />
              </div>
            </div>
            <div className="footer-info">
              <div className="footer-info-wrapper">
                <Link to="/" onClick={scrollUp}>
                  <div className="logo">
                    <div className="logo-footer"></div>
                  </div>
                </Link>
                <div
                  className="nav-footer"
                  onMouseLeave={() => handleHoverOff()}
                >
                  <Link
                    to="/"
                    onClick={scrollUp}
                    onMouseOver={() => handleHover(1)}
                  >
                    <div
                      className={`home home-footer ${navs[1] ? "" : "hovered"}`}
                    >
                      {t("home")}
                    </div>
                  </Link>
                  <Link
                    to="/platform"
                    onClick={scrollUp}
                    onMouseOver={() => handleHover(2)}
                  >
                    <div
                      className={`platform platform-footer ${
                        navs[2] ? "" : "hovered"
                      }`}
                    >
                      {t("platform")}
                    </div>
                  </Link>
                  <Link to="/about-app" onMouseOver={() => handleHover(3)}>
                    <div
                      className={`about-app about-app-footer ${
                        navs[3] ? "" : "hovered"
                      }`}
                      onClick={scrollUp}
                    >
                      {t("about-app")}
                    </div>
                  </Link>
                  <Link
                    to="/study-page"
                    onClick={scrollUp}
                    onMouseOver={() => handleHover(4)}
                  >
                    <div
                      className={`study-page study-page-footer ${
                        navs[4] ? "" : "hovered"
                      }`}
                    >
                      {t("study-page")}
                    </div>
                  </Link>

                  <div
                    className={`demo demo-footer ${navs[5] ? "" : "hovered"}`}
                    onClick={() => dispatch(showPopupDemoAsync(demo))}
                    onMouseOver={() => handleHover(5)}
                  >
                    {t("demo")}
                  </div>

                  <div
                    className={`contact-us contact-us-footer ${
                      navs[6] ? "" : "hovered"
                    }`}
                    onClick={() => dispatch(showPopupAsync())}
                    onMouseOver={() => handleHover(6)}
                  >
                    {t("contact-us")}
                  </div>
                </div>
                <div className="copyright">
                  <div className="ergonza-2020">
                    &#169; {new Date().getFullYear()} Ergonza
                  </div>
                  <div className="ergonza-mail">info@ergonza.com</div>
                  <ChangeLanguageButton footer={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
