import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
import { useDetectOutsideClick } from "../utils/useDetectOutsideClick";
import "./changeLanguageButton.scss";
import { useMediaQuery } from "react-responsive";

export const ChangeLanguageButton = (props) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (ln) => {
    i18n.changeLanguage(ln);
    localStorage.setItem('lang', ln);
  };

  const DropDownMenu = (props) => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const toggle = () => setIsActive(!isActive);

    const MobileLanguageButton = ({ children }) => {
      const isMobile = useMediaQuery({ maxWidth: 375 });
      return isMobile ? children : null;
    };
  
    const DefaultLanguageButton = ({ children }) => {
      const isNotMobile = useMediaQuery({ minWidth: 376 });
      return isNotMobile ? children : null;
    };

    return (
      <>
      <MobileLanguageButton>
      <div className="language-mobile">
        <div className="language-wrapper" onClick={toggle}>
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
      </MobileLanguageButton>
      <DefaultLanguageButton>
      <div className={`language ${props ? 'change-lang-footer' : ''}`}>
        <div className="language-wrapper" onClick={toggle}>
          <div className="language-icon"></div>
          <div className="pick-language">{t("pick-language")}</div>
        </div>
        <div
          className={`drop-down ${isActive ? "active" : ""} ${props ? "drop-down-footer" : ""}`}
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
      </DefaultLanguageButton>
      </>
    );
  };

  return DropDownMenu(props.footer);
};
