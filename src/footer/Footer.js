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
  hidePopupDemoAsync,
} from "../redux/actions";
import { DropDownMenu } from "../DropDownMenu/DropDownMenu";

export const Footer = () => {
  const DefaultFooter = useMediaQuery({ query: "(min-width: 429px)" });
  const MobileFooter = useMediaQuery({ query: "(max-width: 428px)" });

  const { t } = useTranslation();

  const isActive = useSelector((state) => state.isActive);
  const dispatch = useDispatch();
  const demo = useSelector((state) => state.demo);

  const [navs, setHover] = useState({
    1: true,
    2: true,
    3: true,
    4: true,
  });

  const handleHover = (i) => {
    setHover({
      1: false,
      2: false,
      3: false,
      4: false,
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

              <div className="participant-mobile">
                <div className="participant-text-mobile">
                  {t("participant-text")}
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    flexWrap: "wrap"
                  }}>
                  <a
                        href="https://starthub.moscow/starthub_moscow/"
                        target="blank"
                      >
                        <div className="star-hub-img footer-particapent-mobile-imgs"></div>
                      </a>
                      <a href="https://a2121.ru/" target="blank">
                        <div className="arch-img footer-particapent-mobile-imgs"></div>
                      </a>
                      <a href="https://asi.ru/news/184058/" target="blank">
                        <div className="asi-img footer-particapent-mobile-imgs"></div>
                      </a>

                      <a
                        href="https://i.moscow/tech_contests/saasfactory"
                        target="blank"
                      >
                        <div className="msk-img footer-particapent-mobile-imgs"></div>
                      </a>
                   
                      <a href="https://molpred.moscow/" target="blank">
                        <div className="bw-img footer-particapent-mobile-imgs"></div>
                      </a>

                      <a href="https://ed2.tech/" target="blank">
                        <div className="ed-img footer-particapent-mobile-imgs"></div>
                      </a>
                      <a
                        href="https://whitenightstartup.ru/whitenightstartup2021"
                        target="blank"
                      >
                        <div className="wns-img footer-particapent-mobile-imgs"></div>
                      </a>
                      </div>
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
                    <div className="ergonza-year-mobile">
                      &#169; {new Date().getFullYear()} Ergonza
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

                <div className="participant">
                  <div className="participant-text">
                    {t("participant-text")}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      marginRight: "20px",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{display:"flex", marginBottom: "20px"}}>
                      <a
                        href="https://starthub.moscow/starthub_moscow/"
                        target="blank"
                      >
                        <div className="star-hub-img"></div>
                      </a>
                      <a href="https://a2121.ru/" target="blank">
                        <div className="arch-img"></div>
                      </a>
                      <a href="https://asi.ru/news/184058/" target="blank">
                        <div className="asi-img"></div>
                      </a>

                      <a
                        href="https://i.moscow/tech_contests/saasfactory"
                        target="blank"
                      >
                        <div className="msk-img"></div>
                      </a>
                    </div>
                    <div style={{display:"flex"}}>
                      <a href="https://molpred.moscow/" target="blank">
                        <div className="bw-img"></div>
                      </a>

                      <a href="https://ed2.tech/" target="blank">
                        <div className="ed-img"></div>
                      </a>
                      <a
                        href="https://whitenightstartup.ru/whitenightstartup2021"
                        target="blank"
                      >
                        <div className="wns-img"></div>
                      </a>
                    </div>
                  </div>
                </div>

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
                  <Link
                    to="/study-page"
                    onClick={scrollUp}
                    onMouseOver={() => handleHover(3)}
                  >
                    <div
                      className={`study-page study-page-footer ${
                        navs[3] ? "" : "hovered"
                      }`}
                    >
                      {t("study-page")}
                    </div>
                  </Link>
                  <div
                    onMouseOver={() => handleHover(4)}
                    className={`about-us-drow-down about-us-drow-down-footer ${
                      navs[4] ? "" : "hovered"
                    }`}
                  >
                    <DropDownMenu footer={true} />
                  </div>
                </div>
                <div className="copyright">
                  <div className="ergonza-year">
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
