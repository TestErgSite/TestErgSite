import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
import { useDetectOutsideClick } from "../utils/useDetectOutsideClick";
import "./DropDownMenu.scss";
import { Link } from "react-router-dom";

export const DropDownMenu = (props) => {
  const { t, i18n } = useTranslation();
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const toggle = () => setIsActive(!isActive);

  return (
    <div className="drop-down-wrapper">
      <div onClick={toggle}>
        <div>{t("about-us")}</div>
      </div>
      <div
        className={`drop-down-menu ${isActive ? "active" : ""} ${props.footer ? "drop-down-footer-active" : ""}` }
        ref={dropdownRef}
      >
        <Link
          to="/methodology"
          className="drop-down-item drop-down-item-methodology"
        >
          {t("methodology")}
        </Link>
        <Link
          to="/what-is-ergonza"
          className="drop-down-item drop-down-item-erg"
        >
          {t("what-is-ergonza")}
        </Link>
        <Link to="team" className="drop-down-item drop-down-item-team">
          {t("team")}
        </Link>
      </div>
    </div>
  );
};
