import "./Footer.scss";
import React from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
import { DemoButton } from "../demo-button/DemoButton";
import { Link } from "react-router-dom";
import { ChangeLanguageButton } from "../changeLanguageButton/changeLanguageButton";
import { scrollUp } from '../utils/scrollUp';
import { useMediaQuery } from "react-responsive";
import { ContactUsButton } from "../contact-us-button/ContactUsButton";
import { useSelector, useDispatch } from 'react-redux'
import { showPopupAsync, hidePopupAsync } from '../redux/actions'

export const Footer = () => {
  const DefaultFooter = useMediaQuery({ query: '(min-width: 376px)' });
  const MobileFooter = useMediaQuery({ query: '(max-width: 375px)' });
  
  const { t } = useTranslation();

  const isActive = useSelector((state) => state.isActive);
  const dispatch = useDispatch();

  return (
    <>
    {MobileFooter &&
    <div className="footer-mobile">
    <div className={`opacity ${isActive !== "none" ? "overlay" : ""}`} onClick={() => dispatch(hidePopupAsync())}></div>

      <div className="footer-wrapper-mobile">
        <div className="slogan-wrapper-mobile">
          <div className="slogan-mobile footer-slogan-mobile">{t("try-in-action")}</div>
          <div className="mobile-buttons">
          <Link to="/demo">
            <DemoButton />
          </Link>
          <ContactUsButton handlePopup={()=> dispatch(showPopupAsync())}/>
          </div>
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
            <div className="ergonza-2020-mobile">&#169; 2020 Ergonza</div>
              <div className="ergonza-mail">info@ergonza.com</div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    }

   {DefaultFooter &&
    <div className="footer">
    <div className={`opacity ${isActive !== "none" ? "overlay" : ""}`} onClick={() => dispatch(hidePopupAsync())}></div>
      <div className="footer-wrapper">
        <div className="slogan-wrapper">
          <div className="slogan">{t("try-in-action")}</div>
          <div className="footer-buttons">
          <Link to="/demo" className="footer-buttons-demo">
            <DemoButton />
          </Link>

            <ContactUsButton handlePopup={()=> dispatch(showPopupAsync())}/>
     
        </div>
        </div>
        <div className="footer-info">
          <div className="footer-info-wrapper">
            <Link to="/" onClick={scrollUp}>
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
              <Link to="/demo" onClick={scrollUp}>
                <div className="demo demo-footer">
                  {t("demo")}
                </div>
              </Link>

                <div className="contact-us contact-us-footer" onClick={()=> dispatch(showPopupAsync())}>
                  {t("contact-us")}
                </div>
           
             
              <ChangeLanguageButton footer={true}/>
          
            </div>
            <div className="copyright">
              <div className="ergonza-2020">&#169; 2020 Ergonza</div>
              <div className="ergonza-mail">info@ergonza.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
}
    </>
  );
};
