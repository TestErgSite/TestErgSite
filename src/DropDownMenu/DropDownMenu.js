import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
import { useDetectOutsideClick } from "../utils/useDetectOutsideClick";
import { useMediaQuery } from "react-responsive";
import './DropDownMenu.scss';
import { Link } from "react-router-dom";

export const DropDownMenu = () => {

  const { t, i18n } = useTranslation();

  const DefaultDropDownMenu = useMediaQuery({ query: "(min-width: 429px)" });
  const MobileDropDownMenu = useMediaQuery({ query: "(max-width: 428px)" });

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const toggle = () => setIsActive(!isActive);

  return (
    <>
      {MobileDropDownMenu && (
        <div className="drop-down-mobile-wrapper">
          <div
            className="drop-down-mobile-about-us-wrapper"
            onClick={toggle}
          >
            <div className="drop-down-mobile-about-us">{t("about-us")}</div>
          </div>
          <div
            className={`drop-down-menu-mobile ${isActive ? "active" : ""}`}
            ref={dropdownRef}
          >
            <Link to="/menu"
              className="drop-down-item-mobile"
            >
            {t("what-is-ergonza")}
            </Link>

            <div
              className="drop-down-item-mobile"
            >
            {t("methodology")}
            </div>
            <div
              className="drop-down-item-mobile"
            >
            {t("team")}
            </div>
          </div>
        </div>
      )}
      {DefaultDropDownMenu && (
        <div
          className="drop-down-wrapper"
        >
          <div onClick={toggle}>
            <div>{t("about-us")}</div>
          </div>
          <div
            className={`drop-down-menu ${isActive ? "active" : ""}`}
            ref={dropdownRef}
          >
            <Link to="/what-is-ergonza"
              className="drop-down-item drop-down-item-erg"
            >
                 {t("what-is-ergonza")}
            </Link>

            <Link to="methodology"
              className="drop-down-item drop-down-item-methodology"
            >
            {t("methodology")}
            </Link>
            <Link to="team"
              className="drop-down-item drop-down-item-team"
            >
            {t("team")}
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
