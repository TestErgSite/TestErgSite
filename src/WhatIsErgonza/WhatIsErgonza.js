import "./WhatIsErgonza.scss";
import React, { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
import { useMediaQuery } from "react-responsive";
import { useSelector, useDispatch } from "react-redux";
import { hidePopupAsync, hidePopupDemoAsync } from "../redux/actions";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { PopupDemo } from "../PopupDemo/PopupDemo";
import { Popup } from "../Popup/Popup";

export const WhatIsErgonza = () => {
  const { t } = useTranslation();

  const DefaultWhatIsErgonza = useMediaQuery({ query: "(min-width: 429px)" });
  const MobileWhatIsErgonza = useMediaQuery({ query: "(max-width: 428px)" });

  const isActive = useSelector((state) => state.isActive);
  const dispatch = useDispatch();

  const demo = useSelector((state) => state.demo);
  
  return (
    <>
    <Header />
      {MobileWhatIsErgonza && (
        <div className="methodology-mobile">
          <div
            className={`opacity ${isActive !== "none" ? "overlay" : ""}`}
            onClick={() => dispatch(hidePopupAsync())}
          ></div>
          {isActive === "visible" || "animate" ? <Popup /> : null}

          <div
            className={`opacity ${demo !== "none" ? "overlay" : ""}`}
            onClick={() => dispatch(hidePopupDemoAsync())}
          ></div>
          {demo === "visible" || "animate" ? <PopupDemo /> : null}
        </div>
      )}

      {DefaultWhatIsErgonza && (
        <div className="methodology">
          <div
            className={`opacity ${isActive !== "none" ? "overlay" : ""}`}
            onClick={() => dispatch(hidePopupAsync())}
          ></div>
          {isActive === "visible" || "animate" ? <Popup /> : null}

          <div
            className={`opacity ${demo !== "none" ? "overlay" : ""}`}
            onClick={() => dispatch(hidePopupDemoAsync())}
          ></div>
          {demo === "visible" || "animate" ? <PopupDemo /> : null}
        </div>
      )}
      <Footer />
    </>
  );
};
