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
import { EnneaCircle } from '../EnneaCircle/EnneaCircle';

export const Methodology = () => {
  const { t } = useTranslation();

  const DefaultMethodology = useMediaQuery({ query: "(min-width: 429px)" });
  const MobileMethodology = useMediaQuery({ query: "(max-width: 428px)" });

  const isActive = useSelector((state) => state.isActive);
  const dispatch = useDispatch();
  const demo = useSelector((state) => state.demo);

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
            <div className="testing-mobile">{t("testing")}</div>
              <EnneaCircle />
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
          </div>
        </>
      )}
      <Footer />
    </>
  );
};
