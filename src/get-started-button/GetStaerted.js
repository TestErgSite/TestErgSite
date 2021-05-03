import "./GetStaerted.scss";
import React from "react";
import "../i18n";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

export const GetStaerted = () => {

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
    <button className="get-started-button-mobile">{t("get-started")}</button>
    </MobileIntro>
    <DefaultIntro>
    <button className="get-started-button">{t("get-started")}</button>
    </DefaultIntro>
    </>
  ) 
}
