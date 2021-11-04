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

  const [checkboxes, setValues] = useState({
    0: true,
    1: false,
    2: false,
    3: false,
  });

  const handleMouseEvent = (e) => {
    let id;
    console.log(e.target);
    if (e.target.className === "layout-img") {
      id = e.target.id;
    } else {
      id = e.target.parentNode.id;
      console.log(e.target.parentNode.id, "else");
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
  };

  const renderCheckbox = (i, firstCheckboxes) => {
    return (
      <>
        <div
          onClick={() => onCheckboxClick(i, firstCheckboxes)}
          className={
            "comparison-checkbox white " + (checkboxes[i] ? "active" : "")
          }
        >
          <div className="comparison-checkbox__inner comparison-checkbox__inner_white"></div>
        </div>
      </>
    );
  };

  const onCheckboxClick = (i) => {
    setValues({
      0: false,
      1: false,
      2: false,
      3: false,
      ...{
        [i]: true,
      },
    });
  };

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

          <div className="case-study-page-block-6-mobile what-is-ergonza-mobile-block">
            <div className="hybrid-office">
              <div className="hybrid-office-main-header-mobile">
                {t("what-is-ergonza-header")}
              </div>
              <div className="hybrid-office-main-text-mobile">
                {t("what-is-ergonza-text")}
              </div>
            </div>
            <div className="case-study-page-block-6-wrapper case-study-page-block-6-wrapper-mobile">
              <div className="ergonza-logo-circle ergonza-logo-circle-mobile">
                <div className="ergonza-logo ergonza-logo-mobile"></div>
              </div>
              <div className="images-approach-wrapper mobile-images-hybrid">
                <div className="hybrid-office-item hybrid-office-item-mobile erg-p">
                  <div className="what-is-ergonza-page-mobile">
                    <div display="flex" flexDirection="column">
                      {checkboxes["0"] ? (
                        <>
                          <div className="hybrid-office-header-mobile">
                            {t("what-is-ergonza-header-1")}
                          </div>
                          <div className="ergonza-text-mobile">
                            {t("what-is-ergonza-text-1")}
                          </div>
                        </>
                      ) : null}
                      {checkboxes["1"] ? (
                        <>
                          <div className="hybrid-office-header-mobile">
                            {t("what-is-ergonza-header-2")}
                          </div>
                          <div className="ergonza-text-mobile">
                            {t("what-is-ergonza-text-2")}
                          </div>
                        </>
                      ) : null}
                      {checkboxes["2"] ? (
                        <>
                          <div className="hybrid-office-header-mobile">
                            {t("what-is-ergonza-header-3")}
                          </div>
                          <div className="ergonza-text-mobile">
                            {t("what-is-ergonza-text-3")}
                          </div>
                        </>
                      ) : null}
                      {checkboxes["3"] ? (
                        <>
                          <div className="hybrid-office-header-mobile">
                            {t("what-is-ergonza-header-4")}
                          </div>
                          <div className="ergonza-text-mobile">
                            {t("what-is-ergonza-text-4")}
                          </div>
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="hybrid-checkboxes-mobile erg-checkboxes-mobile">
                  {renderCheckbox(0, false)}
                  {renderCheckbox(1, false)}
                  {renderCheckbox(2, false)}
                  {renderCheckbox(3, false)}
                </div>
              </div>
            </div>
          </div>
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
          <div className="case-study-page-block-4 what-is-ergonza-images">
            <div className="images-approach-wrapper">
              <div
                className="approach-img-1 border"
                style={{ opacity: selected[1] ? "1" : "0.2" }}
                onMouseEnter={handleMouseEvent}
                onMouseLeave={onLeave}
              >
                <div className="layout-img" id={1}>
                  <div className="approach-text-item-1 ergonza-text">
                    <span className="span-header">
                      {t("what-is-ergonza-header-1")}
                    </span>
                    {t("what-is-ergonza-text-1")}
                  </div>
                </div>
              </div>
              <div
                className="approach-img-2 border"
                style={{ opacity: selected[2] ? "1" : "0.2" }}
                onMouseEnter={handleMouseEvent}
                onMouseLeave={onLeave}
              >
                <div className="layout-img" id={2}>
                  <div className="approach-text-item-2 ergonza-text">
                    <span className="span-header">
                      {t("what-is-ergonza-header-2")}
                    </span>
                    {t("what-is-ergonza-text-2")}
                  </div>
                </div>
              </div>
            </div>

            <div className="ergonza-logo-circle">
              <div className="ergonza-logo"></div>
            </div>
            <div className="images-approach-wrapper">
              <div
                className="approach-img-3 border"
                style={{ opacity: selected[3] ? "1" : "0.2" }}
                onMouseEnter={handleMouseEvent}
                onMouseLeave={onLeave}
              >
                <div className="layout-img" id={3}>
                  <div className="approach-text-item-3 ergonza-text">
                    <span className="span-header">
                      {t("what-is-ergonza-header-3")}
                    </span>
                    {t("what-is-ergonza-text-3")}
                  </div>
                </div>
              </div>
              <div
                className="approach-img-4 border"
                style={{ opacity: selected[4] ? "1" : "0.2" }}
                onMouseEnter={handleMouseEvent}
                onMouseLeave={onLeave}
              >
                <div className="layout-img" id={4}>
                  <div className="approach-text-item-4 ergonza-text">
                    <span className="span-header">
                      {t("what-is-ergonza-header-4")}
                    </span>
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
