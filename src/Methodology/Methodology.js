import "./Methodology.scss";
import React, { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
import { useMediaQuery } from "react-responsive";
import { useSelector, useDispatch } from "react-redux";
import { hidePopupAsync, hidePopupDemoAsync } from "../redux/actions";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Annotation } from "../annotation/Annotation";
import { PopupDemo } from "../PopupDemo/PopupDemo";
import { Popup } from "../Popup/Popup";
import { EnneaCircle } from "../EnneaCircle/EnneaCircle";

export const Methodology = () => {
  const { t } = useTranslation();

  const DefaultMethodology = useMediaQuery({ query: "(min-width: 429px)" });
  const MobileMethodology = useMediaQuery({ query: "(max-width: 428px)" });

  const isActive = useSelector((state) => state.isActive);
  const dispatch = useDispatch();
  const demo = useSelector((state) => state.demo);

  const getList = (j, col) => {
    let list = [];
    for (let i = 0; i < j; i++) {
      list.push(<li className="block-11-list-item">{t(`list${col}-${i}`)}</li>);
    }
    return list;
  };

  return (
    <>
      <Header />
      {MobileMethodology && (
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
          <div className="methodology-block-1-mobile">
            <div className="principles-mobile">{t("principles")}</div>
            <div className="uniq-mobile">{t("uniq")}</div>
            <div className="platform-foundation-text-mobile">
              <div className="platform-foundation-1">
                {t("platform-foundation-1")}
              </div>
              <div className="platform-foundation-2">
                {t("platform-foundation-2")}
              </div>
              <div className="platform-foundation-3">
                {t("platform-foundation-3")}
              </div>
              <div className="platform-foundation-4">
                {t("platform-foundation-4")}
              </div>
            </div>
            <div className="platform-foundation-img-mobile"></div>
            <div className="focus">
              <Annotation direction="left" text={t("focus")}></Annotation>
            </div>
          </div>
          <div className="methodology-block-2-mobile">
            <div className="layout">
              <div className="methodology-block-2-wrapper">
                <div className="first-time-mobile">{t("first-time")}</div>
                <div className="first-time-text-mobile">
                  <div className="first-time-text-1">
                    {t("first-time-text-1")}
                  </div>
                  <div className="first-time-text-2">
                    {t("first-time-text-2")}
                  </div>
                  <div className="first-time-text-3">
                    {t("first-time-text-3")}
                  </div>
                  <div className="first-time-text-4">
                    {t("first-time-text-4")}
                  </div>
                  <div className="first-time-text-5">
                    {t("first-time-text-5")}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="methodology-block-3-mobile">
            <Annotation
              direction="left"
              text={t("methodology-block-3-text")}
            ></Annotation>
          </div>
          <div className="methodology-block-4-mobile">
            <div className="result-mobile">{t("result")}</div>
            <div className="result-text-mobile">{t("result-text")}</div>
          </div>
          <div className="methodology-block-5-mobile">
            <EnneaCircle />
          </div>
          //
          <div className="methodology-block-6">
            <div className="brends-header">{t("brends-header")}</div>
            <div className="brends-images">
              <div className="brands-img-1"></div>
              <div className="brands-img-2"></div>
              <div className="brands-img-3"></div>
              <div className="brands-img-4"></div>
            </div>
          </div>
          <div className="methodology-block-7">
            <div className="highly-efficient-team-header">
              {t("highly-efficient-team-header")}
            </div>
            <div className="block-7-content-wrapper">
              <div className="highly-efficient-team-text">
                <span style={{ marginBottom: "10px", display: "flex" }}>
                  {" "}
                  {t("highly-efficient-team-text-0")}
                </span>
                <span style={{ marginBottom: "10px", display: "flex" }}>
                  {" "}
                  {t("highly-efficient-team-text-1")}
                </span>
                <span style={{ marginBottom: "10px", display: "flex" }}>
                  {" "}
                  {t("highly-efficient-team-text-2")}
                </span>
              </div>
              <div className="highly-efficient-team-img"></div>
            </div>
          </div>
          <div className="methodology-block-8">
            <div className="validation-header">{t("validation-header")}</div>
            <div className="block-8-content-wrapper">
              <div className="validation-text">
                <span style={{ marginBottom: "10px", display: "flex" }}>
                  {" "}
                  {t("validation-text-0")}
                </span>
                <span style={{ marginBottom: "10px", display: "flex" }}>
                  {" "}
                  {t("validation-text-1")}
                </span>
                <span style={{ marginBottom: "10px", display: "flex" }}>
                  {" "}
                  {t("validation-text-2")}
                </span>
                <span style={{ marginBottom: "10px", display: "flex" }}>
                  {" "}
                  {t("validation-text-3")}
                </span>
                <span style={{ marginBottom: "10px", display: "flex" }}>
                  {" "}
                  {t("validation-text-4")}
                </span>
              </div>
              <div className="validation-img"></div>
            </div>
          </div>
          <div className="methodology-block-9">
            <div className="model-main-header">{t("model-main-header")}</div>
            <div className="methodology-block-9-wrapper">
              <div className="model">
                <div className="model-img"></div>
                <div className="model-header">{t("model-header")}</div>
                <div className="model-text">{t("model-text")}</div>
              </div>

              <div className="type">
                <div className="type-img"></div>
                <div className="type-header-pers">{t("type-header")}</div>
                <div className="type-text">{t("type-text")}</div>
              </div>

              <div className="HPEI">
                <div className="HPEI-img"></div>
                <div className="HPEI-header">{t("HPEI-header")}</div>
                <div className="HPEI-text">{t("HPEI-text")}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {DefaultMethodology && (
        <>
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

            <div className="methodology-block-1">
              <div className="principles">{t("principles")}</div>
              <div className="uniq">{t("uniq")}</div>
              <div className="platform-foundation-wrapper">
                <div className="platform-foundation-text">
                  <div className="platform-foundation-1">
                    {t("platform-foundation-1")}
                  </div>
                  <div className="platform-foundation-2">
                    {t("platform-foundation-2")}
                  </div>
                  <div className="platform-foundation-3">
                    {t("platform-foundation-3")}
                  </div>
                  <div className="platform-foundation-4">
                    {t("platform-foundation-4")}
                  </div>
                </div>
                <div className="platform-foundation-img"></div>
              </div>
              <div className="focus">
                <Annotation direction="left" text={t("focus")}></Annotation>
              </div>
            </div>

            <div className="methodology-block-2">
              <div className="layout">
                <div className="methodology-block-2-wrapper">
                  <div className="first-time">{t("first-time")}</div>
                  <div className="first-time-text">
                    <div className="first-time-text-1">
                      {t("first-time-text-1")}
                    </div>
                    <div className="first-time-text-2">
                      {t("first-time-text-2")}
                    </div>
                    <div className="first-time-text-3">
                      {t("first-time-text-3")}
                    </div>
                    <div className="first-time-text-4">
                      {t("first-time-text-4")}
                    </div>
                    <div className="first-time-text-5">
                      {t("first-time-text-5")}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="methodology-block-3">
              <Annotation
                direction="left"
                text={t("methodology-block-3-text")}
              ></Annotation>
            </div>

            <div className="methodology-block-4">
              <div className="result">{t("result")}</div>
              <div className="result-text">{t("result-text")}</div>
            </div>

            <div className="methodology-block-5">
              <EnneaCircle />
            </div>

            <div className="methodology-block-6">
              <div className="brends-header">{t("brends-header")}</div>
              <div className="brends-images">
                <div className="brands-img-1"></div>
                <div className="brands-img-2"></div>
                <div className="brands-img-3"></div>
                <div className="brands-img-4"></div>
              </div>
            </div>

            <div className="methodology-block-7">
              <div className="highly-efficient-team-header">
                {t("highly-efficient-team-header")}
              </div>
              <div className="block-7-content-wrapper">
                <div className="highly-efficient-team-text">
                  <span style={{ marginBottom: "10px", display: "flex" }}>
                    {" "}
                    {t("highly-efficient-team-text-0")}
                  </span>
                  <span style={{ marginBottom: "10px", display: "flex" }}>
                    {" "}
                    {t("highly-efficient-team-text-1")}
                  </span>
                  <span style={{ marginBottom: "10px", display: "flex" }}>
                    {" "}
                    {t("highly-efficient-team-text-2")}
                  </span>
                </div>
                <div className="highly-efficient-team-img"></div>
              </div>
            </div>

            <div className="methodology-block-8">
              <div className="validation-header">{t("validation-header")}</div>
              <div className="block-8-content-wrapper">
                <div className="validation-text">
                  <span style={{ marginBottom: "10px", display: "flex" }}>
                    {" "}
                    {t("validation-text-0")}
                  </span>
                  <span style={{ marginBottom: "10px", display: "flex" }}>
                    {" "}
                    {t("validation-text-1")}
                  </span>
                  <span style={{ marginBottom: "10px", display: "flex" }}>
                    {" "}
                    {t("validation-text-2")}
                  </span>
                  <span style={{ marginBottom: "10px", display: "flex" }}>
                    {" "}
                    {t("validation-text-3")}
                  </span>
                  <span style={{ marginBottom: "10px", display: "flex" }}>
                    {" "}
                    {t("validation-text-4")}
                  </span>
                </div>
                <div className="validation-img"></div>
              </div>
            </div>

            <div className="methodology-block-9">
              <div className="model-main-header">{t("model-main-header")}</div>
              <div className="methodology-block-9-wrapper">
                <div className="model">
                  <div className="model-img"></div>
                  <div className="model-header">{t("model-header")}</div>
                  <div className="model-text">{t("model-text")}</div>
                </div>

                <div className="type">
                  <div className="type-img"></div>
                  <div className="type-header-pers">{t("type-header")}</div>
                  <div className="type-text">{t("type-text")}</div>
                </div>

                <div className="HPEI">
                  <div className="HPEI-img"></div>
                  <div className="HPEI-header">{t("HPEI-header")}</div>
                  <div className="HPEI-text">{t("HPEI-text")}</div>
                </div>
              </div>
            </div>

            <div className="methodology-block-10">
              <div className="barometer-craate-header">
                {t("barometer-craate-header")}
              </div>
              <div className="barometer-craate-text">
                {t("barometer-craate-text")}
              </div>
            </div>

            <div className="methodology-block-11">
              <div style={{display: "flex"}}>
                <div className="block-11-col-1">
                  <div className="col-1-img"></div>
                  <div className="col-1-header">{t("col-1-heder")}</div>
                  <ol>{getList(11, 1)}</ol>
                </div>
                <div className="block-11-col-2">
                  <div className="col-2-img"></div>
                  <div className="col-2-header">{t("col-2-heder")}</div>
                  <ol>{getList(9, 2)}</ol>
                </div>
              </div>
              <div style={{display: "flex", marginTop: 40}}>
              <div className="block-11-result">
                <div className="col-text-wrapper margin-col">
                  <div className="col-text">{t("col-1-text-1")}</div>
                  <div className="col-text" style={{marginTop: 20}}>{t("col-1-text-2")}</div>
                </div>

                <div className="col-text-wrapper">
                  <div className="col-text">{t("col-2-text-3")}</div>
                  <ol className="col-text">
                    <li>{t("col-2-text-4")}</li>
                    <li>{t("col-2-text-5")}</li>
                    <li>{t("col-2-text-6")}</li>
                  </ol>
                </div>
              </div>
              </div>
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
};
