import "./DemoButton.scss";
import React from "react";
import "../i18n";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

export const DemoButton = () => {

  const MobileIntro = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 375 });
    return isMobile ? children : null;
  };

  const DefaultIntro = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 376 });
    return isNotMobile ? children : null;
  };

  const { t } = useTranslation();
  return(
    <>
    <MobileIntro>
    <button className="demo-button-mobile">{t("demo")}</button>
    </MobileIntro>
    <DefaultIntro>
    <button className="demo-button">{t("demo")}</button>
    </DefaultIntro>
    </>
  ) 
}
