import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
import { useDetectOutsideClick } from "../utils/useDetectOutsideClick";
import "./changeLanguageButton.scss";
import { useMediaQuery } from "react-responsive";

export const ChangeLanguageButton = (props) => {
  const DefaultLanguageButton = useMediaQuery({ query: '(min-width: 429px)' });
  const MobileLanguageButton = useMediaQuery({ query: '(max-width: 428px)' });

  const { t, i18n } = useTranslation();

  const changeLanguage = (ln) => {
    i18n.changeLanguage(ln);
    localStorage.setItem('lang', ln);
  };

  const DropDownMenu = (footerDefault, footerMobile) => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const toggle = () => setIsActive(!isActive);


    return (
      <>
      {MobileLanguageButton &&
      <div className="language-mobile">
        <div className={`language-wrapper ${footerMobile ? 'language-wrapper-footer-mobile' : ''}`} onClick={toggle}>
          <div className="language-icon-mobile"></div>
          <div className="pick-language-mobile">{t("pick-language")}</div>
        </div>
        <div
          className={`drop-down-mobile ${isActive ? "active" : ""}`}
          ref={dropdownRef}
        >
          <div
   
            className="changeLang-mobile eng"
            onClick={() => changeLanguage("en")}
          >
            En
          </div>

          <div className="changeLang-mobile rus" onClick={() => changeLanguage("ru")}>
            Ru
          </div>
        </div>
      </div>
    }
      {DefaultLanguageButton &&
      <div className={`language ${footerDefault ? 'change-lang-footer' : ''}`}>
        <div className="language-wrapper" onClick={toggle}>
          <div className="language-icon"></div>
          <div className="pick-language">{t("pick-language")}</div>
        </div>
        <div
          className={`drop-down ${isActive ? "active" : ""} ${footerDefault ? "drop-down-footer" : ""}`}
          ref={dropdownRef}
        >
          <div
   
            className="changeLang eng"
            onClick={() => changeLanguage("en")}
          >
            En
          </div>

          <div className="changeLang rus" onClick={() => changeLanguage("ru")}>
            Ru
          </div>
        </div>
      </div>
   }
      </>
    );
  };

  return DropDownMenu(props.footer, props.footerMobile);
};
