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

  const [selected, setSelected] = useState({
    1: true,
    2: true,
    3: true,
    4: true,
  });

  const handleMouseEvent = (e) => {
    let id;
    console.log(e.target)
    if( e.target.className === 'layout-img') {
      id = e.target.id; 
    } else {
      id = e.target.parentNode.id; 
      console.log(e.target.parentNode.id, 'else')
    }
    setSelected({
      1: false,
      2: false,
      3: false,
      4: false,
      ...{
        [id]: true,
      },
    });
  };

  const onLeave = (e) => {
    const id = e.target.id;
    setSelected({
      1: true,
      2: true,
      3: true,
      4: true,
    });
  }

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
        <div className="what-is-ergonza">
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
          <div className="what-is-ergonza-wrapper">
            <div className="what-is-ergonza-header">
              {t("what-is-ergonza-header")}
            </div>
            <div className="what-is-ergonza-text">
              {t("what-is-ergonza-text")}
            </div>
          </div>
          <div className="case-study-page-block-4 what-is-ergonza-images" >
            <div className="images-approach-wrapper" >
              <div className="approach-img-1 border" style={{opacity: selected[1] ? '1' : '0.2'}} onMouseEnter={handleMouseEvent} onMouseLeave={onLeave}>
                <div className="layout-img" id={1}>
                  <div className="approach-text-item-1 ergonza-text">
                    <span className="span-header">{t("what-is-ergonza-header-1")}</span>
                    {t("what-is-ergonza-text-1")}
                  </div>
                </div>
              </div>
              <div className="approach-img-2 border" style={{opacity: selected[2] ? '1' : '0.2'}} onMouseEnter={handleMouseEvent} onMouseLeave={onLeave}>
                <div className="layout-img" id={2}>
                  <div className="approach-text-item-2 ergonza-text">
                  <span className="span-header">{t("what-is-ergonza-header-2")}</span>
                    {t("what-is-ergonza-text-2")}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="ergonza-logo-circle"><div className="ergonza-logo"></div></div>
            <div className="images-approach-wrapper">
              <div className="approach-img-3 border" style={{opacity: selected[3] ? '1' : '0.2'}} onMouseEnter={handleMouseEvent} onMouseLeave={onLeave}>
                <div className="layout-img" id={3}>
                  <div className="approach-text-item-3 ergonza-text">
                  <span className="span-header">{t("what-is-ergonza-header-3")}</span>
                    {t("what-is-ergonza-text-3")}
                  </div>
                </div>
              </div>
              <div className="approach-img-4 border" style={{opacity: selected[4] ? '1' : '0.2'}} onMouseEnter={handleMouseEvent} onMouseLeave={onLeave}>
                <div className="layout-img" id={4}>
                  <div className="approach-text-item-4 ergonza-text">
                  <span className="span-header">{t("what-is-ergonza-header-4")}</span>
                    {t("what-is-ergonza-text-4")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};
