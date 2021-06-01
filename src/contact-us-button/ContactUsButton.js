import "./ContactUsButton.scss";
import React from "react";
import "../i18n";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

export const ContactUsButton = (props) => {

  const DefaultContactUsButton = useMediaQuery({ query: "(min-width: 429px)" });
  const MobileContactUsButton = useMediaQuery({ query: "(max-width: 428px)" });

  const { t } = useTranslation();
  return (
    <>
      {MobileContactUsButton && (
        <button
          className="contact-us-button-mobile"
          onClick={() => props.handlePopup()}
        >
          {t("contact-us")}
        </button>
      )}
      {DefaultContactUsButton && (
        <button className="contact-us-button"
         onClick={() => props.handlePopup()}>{t("contact-us")}</button>
      )}
    </>
  );
};
