import "./DemoButton.scss";
import React from "react";
import "../i18n";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const DemoButton = () => {
  const DefaultDemoButton = useMediaQuery({ query: "(min-width: 429px)" });
  const MobileDemoButton = useMediaQuery({ query: "(max-width: 428px)" });

  const url = useSelector((state) => state.url);

  const { t } = useTranslation();

  return (
    <>
      {MobileDemoButton && (
        <Link to={{ pathname: url }} target="_blank">
          <button className="demo-button-mobile">{t("demo")}</button>
        </Link>
      )}
      {DefaultDemoButton && (
        <Link to={{ pathname: url }} target="_blank" className="footer-buttons-demo">
          <button className="demo-button">{t("demo")}</button>
        </Link>
      )}
    </>
  );
};
