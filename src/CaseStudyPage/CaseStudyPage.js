import React, { useState } from "react";
import "./CaseStudyPage.scss";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Slideshow } from "../SliderMobile/SliderMobile";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { Popup } from "../Popup/Popup";
import { useSelector, useDispatch } from 'react-redux'
import { PopupDemo } from '../PopupDemo/PopupDemo';
import { hidePopupAsync, hidePopupDemoAsync } from "../redux/actions";

export const CaseStudyPage = () => {

  const DefaultCaseStudyPage = useMediaQuery({ query: "(min-width: 429px)" });
  const MobileCaseStudyPage = useMediaQuery({ query: "(max-width: 428px)" });

  const { t } = useTranslation();

  const isActive = useSelector((state) => state.isActive); 
  const demo = useSelector((state) => state.demo);
  const dispatch = useDispatch();

  const [checkboxes, setValues] = useState({
    0: false,
    1: true,
  });

  const renderCheckbox = (i) => {
    return (
      <>
        <div
          onClick={() => onCheckboxClick(i)}
          className={"comparison-checkbox " + (checkboxes[i] ? "active" : "")}
        >
          <div className="comparison-checkbox__inner"></div>
        </div>
      </>
    );
  };

  const onCheckboxClick = (i) => {
    setValues({
      0: false,
      1: false,
      ...{
        [i]: true,
      },
    });
  };

  return (
    <>
      <Header />
      {MobileCaseStudyPage &&
        <div className="case-study-page-mobile">
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

          <div className="case-study-page-block-1-mobile">
            <div className="case-study-page-wrapper-mobile">
              <div className="case-study-page-problem-mobile">
                <div className="case-study-page-problem-text-mobile">
                  <div className="case-study-page-header-mobile">
                    {t("case-study-page-header")}
                  </div>
                  <div className="case-study-page-problem-header-mobile">
                    {t("case-study-page-problem-header")}
                  </div>

                  <div className="case-study-page-problem-item-mobile case-study-page-problem-item-1">
                    {t("case-study-page-problem-item-1")}
                  </div>
                  <div className="case-study-page-problem-item-mobile case-study-page-problem-item-2">
                    {t("case-study-page-problem-item-2")}
                  </div>
                  <div className="case-study-page-problem-item-mobile case-study-page-problem-item-3">
                    {t("case-study-page-problem-item-3")}
                  </div>
                  <div className="case-study-page-problem-item-mobile case-study-page-problem-item-4">
                    {t("case-study-page-problem-item-4")}
                  </div>
                </div>
                <div className="case-study-page-problem-img-mobile"></div>
              </div>

              <div className="case-study-page-approach-mobile">
                <div className="case-study-page-approach-text-mobile">
                  <div className="case-study-page-approach-header-mobile">
                    {t("case-study-page-approach-header")}
                  </div>

                  <div className="case-study-page-approach-item-mobile case-study-page-approach-item-1">
                    {t("case-study-page-approach-item-1")}
                  </div>
                  <div className="case-study-page-approach-item-mobile case-study-page-approach-item-2">
                    {t("case-study-page-approach-item-2")}
                  </div>
                  <div className="case-study-page-approach-item-mobile case-study-page-approach-item-3">
                    {t("case-study-page-approach-item-3")}
                  </div>
                </div>
                <div className="case-study-page-approach-img-mobile"></div>
              </div>
            </div>
          </div>

          <div className="case-study-page-block-2-mobile">
            <div className="layout">
              <div className="case-study-page-wrapper-mobile">
                <div className="case-study-page-ergonza-approach-text-wrapper">
                  <div className="case-study-page-ergonza-approach-text">
                    <div className="case-study-page-ergonza-approach-header-mobile">
                      {t("case-study-page-ergonza-approach-header")}
                    </div>
                    <div className="case-study-page-ergonza-approach-item-1-mobile">
                      {t("case-study-page-ergonza-approach-item-1")}
                    </div>
                  </div>

                  <div className="case-study-page-ergonza-made-possible-text">
                    <div className="case-study-page-ergonza-made-possible-header-mobile">
                      {t("case-study-page-ergonza-made-possible-header")}
                    </div>
                    <div className="case-study-page-ergonza-made-possible-text-wrapper-mobile">
                      <div className="case-study-page-ergonza-made-possible-item-1-mobile">
                        {t("case-study-page-ergonza-made-possible-item-1")}
                      </div>
                      <div className="case-study-page-ergonza-made-possible-item-2-mobile">
                        {t("case-study-page-ergonza-made-possible-item-2")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="case-study-page-block-3-mobile">
            <div className="images-integration-wrapper-mobile">
              <div className="integration-img-1-mobile"></div>
              <div className="integration-img-2-mobile"></div>
              <div className="integration-img-3-mobile"></div>
              <div className="integration-img-4-mobile"></div>
              <div className="integration-img-5-mobile"></div>
            </div>
          </div>

          <div className="case-study-page-block-4-mobile">
            <Slideshow />
          </div>

          <div className="case-study-page-block-5-mobile">
            <div className="case-study-page-wrapper-mobile">
              {checkboxes[0] ? (
                <div className="comparison-mobile">
                  <div className="standard-hcm-mobile">
                    <div className="standard-hcm-header-mobile">
                      {t("standard-hcm-header")}
                    </div>
                    <div className="comparison-item-mobile comparison-item-first">
                      <div className="standard-hcm-item-header-mobile hcm-structure">
                        {t("hcm-structure")}
                      </div>
                      <div className="standard-hcm-text-mobile standard-hcm-text-item-1">
                        {t("standard-hcm-text-item-1")}
                      </div>
                    </div>

                    <div className="comparison-item-mobile">
                      <div className="standard-hcm-item-header-mobile hcm-assessment">
                        {t("hcm-assessment")}
                      </div>
                      <div className="standard-hcm-text-mobile standard-hcm-text-item-2">
                        {t("standard-hcm-text-item-2")}
                      </div>
                    </div>

                    <div className="comparison-item-mobile">
                      <div className="standard-hcm-item-header-mobile hcm-recruitment">
                        {t("hcm-recruitment")}
                      </div>
                      <div className="standard-hcm-text-mobile standard-hcm-text-item-3">
                        {t("standard-hcm-text-item-3")}
                      </div>
                    </div>

                    <div className="comparison-item-mobile comparison-item-last">
                      <div className="standard-hcm-item-header-mobile hcm-education">
                        {t("hcm-education")}
                      </div>
                      <div className="standard-hcm-text-mobile standard-hcm-text-item-4">
                        {t("standard-hcm-text-item-4")}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="comparison-mobile">
                  <div className="ergonza-mobile">
                    <div className="ergonza-header-mobile">{t("ergonza-header")}</div>
                    <div className="comparison-item-mobile comparison-item-first">
                      <div className="ergonza-item-header-mobile ergonza-structure">
                        {t("ergonza-structure")}
                      </div>
                      <div className="ergonza-text-mobile ergonza-text-item-1">
                        {t("ergonza-text-item-1")}
                      </div>
                    </div>

                    <div className="comparison-item-mobile">
                      <div className="ergonza-item-header-mobile ergonza-assessment">
                        {t("ergonza-assessment")}
                      </div>
                      <div className="ergonza-text-mobile ergonza-text ergonza-text-item-2">
                        {t("ergonza-text-item-2")}
                      </div>
                    </div>

                    <div className="comparison-item-mobile">
                      <div className="ergonza-item-header-mobile ergonza-recruitment">
                        {t("ergonza-recruitment")}
                      </div>
                      <div className="ergonza-text-mobile ergonza-text ergonza-text-item-3">
                        {t("ergonza-text-item-3")}
                      </div>
                    </div>

                    <div className="comparison-item-mobile comparison-item-last">
                      <div className="ergonza-item-header-mobile ergonza-education">
                      {t("ergonza-education")}
                      </div>
                      <div className="ergonza-text-mobile ergonza-text ergonza-text-item-4">
                        {t("ergonza-text-item-4")}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="checkboxes-wrapper-comparison">
                {renderCheckbox(0)}
                {renderCheckbox(1)}
              </div>
            </div>
          </div>
        </div>
  }

      {DefaultCaseStudyPage &&
        <div className="case-study-page">
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

          <div className="case-study-page-block-1">
            <div className="case-study-page-wrapper">
              <div className="case-study-page-problem">
                <div className="case-study-page-problem-text">
                  <div className="case-study-page-header">
                    {t("case-study-page-header")}
                  </div>
                  <div className="case-study-page-problem-header">
                    {t("case-study-page-problem-header")}
                  </div>

                  <div className="case-study-page-problem-item case-study-page-problem-item-1">
                    {t("case-study-page-problem-item-1")}
                  </div>
                  <div className="case-study-page-problem-item case-study-page-problem-item-2">
                    {t("case-study-page-problem-item-2")}
                  </div>
                  <div className="case-study-page-problem-item case-study-page-problem-item-3">
                    {t("case-study-page-problem-item-3")}
                  </div>
                  <div className="case-study-page-problem-item case-study-page-problem-item-4">
                    {t("case-study-page-problem-item-4")}
                  </div>
                </div>
                <div className="case-study-page-problem-img"></div>
              </div>

              <div className="case-study-page-approach">
                <div className="case-study-page-approach-text">
                  <div className="case-study-page-approach-header">
                    {t("case-study-page-approach-header")}
                  </div>

                  <div className="case-study-page-approach-item case-study-page-approach-item-1">
                    {t("case-study-page-approach-item-1")}
                  </div>
                  <div className="case-study-page-approach-item case-study-page-approach-item-2">
                    {t("case-study-page-approach-item-2")}
                  </div>
                  <div className="case-study-page-approach-item case-study-page-approach-item-3">
                    {t("case-study-page-approach-item-3")}
                  </div>
                </div>
                <div className="case-study-page-approach-img"></div>
              </div>
            </div>
          </div>

          <div className="case-study-page-block-2">
            <div className="layout">
              <div className="case-study-page-wrapper">
                <div className="case-study-page-ergonza-approach-text-wrapper">
                  <div className="case-study-page-ergonza-approach-text">
                    <div className="case-study-page-ergonza-approach-header">
                      {t("case-study-page-ergonza-approach-header")}
                    </div>
                    <div className="case-study-page-ergonza-approach-item-1">
                      {t("case-study-page-ergonza-approach-item-1")}
                    </div>
                  </div>

                  <div className="case-study-page-ergonza-made-possible-text">
                    <div className="case-study-page-ergonza-made-possible-header">
                      {t("case-study-page-ergonza-made-possible-header")}
                    </div>
                    <div className="case-study-page-ergonza-made-possible-text-wrapper">
                      <div className="case-study-page-ergonza-made-possible-item-1">
                        {t("case-study-page-ergonza-made-possible-item-1")}
                      </div>
                      <div className="case-study-page-ergonza-made-possible-item-2">
                        {t("case-study-page-ergonza-made-possible-item-2")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="case-study-page-block-3">
            <div className="case-study-page-wrapper">
              <div className="images-integration-wrapper">
                <div className="integration-img-1"></div>
                <div className="integration-img-2"></div>
                <div className="integration-img-3"></div>
                <div className="integration-img-4"></div>
                <div className="integration-img-5"></div>
              </div>
            </div>
          </div>

          <div className="case-study-page-block-4">
     
            <div className="images-approach-wrapper">
              <div className="approach-img-1">
                <div className="layout">
                  <div className="approach-text-item-1">
                    {t("approach-text-item-1")}
                  </div>
                </div>
              </div>
              <div className="approach-img-2">
                <div className="layout">
                  <div className="approach-text-item-2">
                    {t("approach-text-item-2")}
                  </div>
                </div>
              </div>
            </div>
            <div className="images-approach-wrapper">
              <div className="approach-img-3">
                <div className="layout">
                  <div className="approach-text-item-3">
                    {t("approach-text-item-3")}
                  </div>
                </div>
              </div>
              <div className="approach-img-4">
                <div className="layout">
                  <div className="approach-text-item-4">
                    {t("approach-text-item-4")}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="case-study-page-block-5">
            <div className="case-study-page-wrapper">
              <div className="comparison">
                <div className="standard-hcm">
                  <div className="standard-hcm-header">
                    {t("standard-hcm-header")}
                  </div>
                  <div className="comparison-item comparison-item-first">
                    <div className="standard-hcm-item-header hcm-structure">
                      {t("hcm-structure")}
                    </div>
                    <div className="standard-hcm-text standard-hcm-text-item-1">
                      {t("standard-hcm-text-item-1")}
                    </div>
                  </div>

                  <div className="comparison-item">
                    <div className="standard-hcm-item-header hcm-assessment">
                      {t("hcm-assessment")}
                    </div>
                    <div className="standard-hcm-text standard-hcm-text-item-2">
                      {t("standard-hcm-text-item-2")}
                    </div>
                  </div>

                  <div className="comparison-item">
                    <div className="standard-hcm-item-header hcm-recruitment">
                      {t("hcm-recruitment")}
                    </div>
                    <div className="standard-hcm-text standard-hcm-text-item-3">
                      {t("standard-hcm-text-item-3")}
                    </div>
                  </div>

                  <div className="comparison-item comparison-item-last">
                    <div className="standard-hcm-item-header hcm-education">
                      {t("hcm-education")}
                    </div>
                    <div className="standard-hcm-text standard-hcm-text-item-4">
                      {t("standard-hcm-text-item-4")}
                    </div>
                  </div>
                </div>
                <div className="ergonza">
                  <div className="ergonza-header">{t("ergonza-header")}</div>
                  <div className="comparison-item comparison-item-first">
                    <div className="ergonza-item-header ergonza-structure">
                      {t("ergonza-structure")}
                    </div>
                    <div className="ergonza-text ergonza-text-item-1">
                      {t("ergonza-text-item-1")}
                    </div>
                  </div>

                  <div className="comparison-item">
                    <div className="ergonza-item-header ergonza-assessment">
                      {t("ergonza-assessment")}
                    </div>
                    <div className="ergonza-text ergonza-text ergonza-text-item-2">
                      {t("ergonza-text-item-2")}
                    </div>
                  </div>

                  <div className="comparison-item">
                    <div className="ergonza-item-header ergonza-recruitment">
                      {t("ergonza-recruitment")}
                    </div>
                    <div className="ergonza-text ergonza-text ergonza-text-item-3">
                      {t("ergonza-text-item-3")}
                    </div>
                  </div>

                  <div className="comparison-item comparison-item-last">
                    <div className="ergonza-item-header ergonza-education">
                      {t("ergonza-education")}
                    </div>
                    <div className="ergonza-text ergonza-text ergonza-text-item-4">
                      {t("ergonza-text-item-4")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
     }
      <Footer />
    </>
  );
};
