import React, { useState } from "react";
import "./CaseStudyPage.scss";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Slideshow } from "../SliderMobile/SliderMobile";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { Popup } from "../Popup/Popup";
import { useSelector, useDispatch } from "react-redux";
import { PopupDemo } from "../PopupDemo/PopupDemo";
import { hidePopupAsync, hidePopupDemoAsync } from "../redux/actions";
import { InfoBlock } from "../InfoBlock/InfoBlock";
import { Annotation } from "../annotation/Annotation";
import eye from "./images-block-7/eye.svg";
import diagram from "./images-block-7/diagram.svg";
import notes from "./images-block-7/notes.svg";

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

  const [checkboxesForSecondSlider, setValuesForSecondSlider] = useState({
    0: true,
    1: false,
    2: false,
    3: false,
  });

  const renderCheckbox = (i, firstCheckboxes) => {
    if (firstCheckboxes) {
      return (
        <>
          <div
            onClick={() => onCheckboxClick(i, firstCheckboxes)}
            className={"comparison-checkbox " + (checkboxes[i] ? "active" : "")}
          >
            <div className="comparison-checkbox__inner"></div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div
            onClick={() => onCheckboxClick(i, firstCheckboxes)}
            className={
              "comparison-checkbox white " +
              (checkboxesForSecondSlider[i] ? "active" : "")
            }
          >
            <div className="comparison-checkbox__inner comparison-checkbox__inner_white"></div>
          </div>
        </>
      );
    }
  };

  const onCheckboxClick = (i, firstCheckboxes) => {
    if (firstCheckboxes) {
      setValues({
        0: false,
        1: false,
        ...{
          [i]: true,
        },
      });
    } else {
      setValuesForSecondSlider({
        0: false,
        1: false,
        2: false,
        3: false,
        ...{
          [i]: true,
        },
      });
    }
  };

  return (
    <>
      <Header />
      {MobileCaseStudyPage && (
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
                    <div className="ergonza-header-mobile">
                      {t("ergonza-header")}
                    </div>
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
                      <div className="ergonza-text-mobile ergonza-text-item-2">
                        {t("ergonza-text-item-2")}
                      </div>
                    </div>

                    <div className="comparison-item-mobile">
                      <div className="ergonza-item-header-mobile ergonza-recruitment">
                        {t("ergonza-recruitment")}
                      </div>
                      <div className="ergonza-text-mobile ergonza-text-item-3">
                        {t("ergonza-text-item-3")}
                      </div>
                    </div>

                    <div className="comparison-item-mobile comparison-item-last">
                      <div className="ergonza-item-header-mobile ergonza-education">
                        {t("ergonza-education")}
                      </div>
                      <div className="ergonza-text-mobile ergonza-text-item-4">
                        {t("ergonza-text-item-4")}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="checkboxes-wrapper-comparison">
                {renderCheckbox(0, true)}
                {renderCheckbox(1, true)}
              </div>
            </div>
          </div>

          <div className="case-study-page-block-6-mobile">
            <div className="hybrid-office">
              <div className="hybrid-office-main-header-mobile">
                {t("hybrid-office-main-header")}
              </div>
              <div className="hybrid-office-main-text-mobile">
                {t("hybrid-office-main-text")}
              </div>
            </div>
            <div className="case-study-page-block-6-wrapper case-study-page-block-6-wrapper-mobile">
              <div className="hybrid-office-header-mobile">
                {t("hybrid-office-header")}
              </div>
              <div className="images-approach-wrapper mobile-images-hybrid">
                <div className="hybrid-office-item hybrid-office-item-mobile">
                  <div className="approach-text-item-1 hybrid-mobile">
                    <b className="bold-mobile">
                      {checkboxesForSecondSlider["0"] ? 1 : null}
                      {checkboxesForSecondSlider["1"] ? 2 : null}
                      {checkboxesForSecondSlider["2"] ? 3 : null}
                      {checkboxesForSecondSlider["3"] ? 4 : null}
                    </b>
                    <div>
                      {checkboxesForSecondSlider["0"] ? (
                        <>{t("hybrid-office-text-item-1")}</>
                      ) : null}
                      {checkboxesForSecondSlider["1"] ? (
                        <>{t("hybrid-office-text-item-2")}</>
                      ) : null}
                      {checkboxesForSecondSlider["2"] ? (
                        <>{t("hybrid-office-text-item-3")}</>
                      ) : null}
                      {checkboxesForSecondSlider["3"] ? (
                        <>{t("hybrid-office-text-item-4")}</>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="hybrid-checkboxes-mobile">
                  {renderCheckbox(0, false)}
                  {renderCheckbox(1, false)}
                  {renderCheckbox(2, false)}
                  {renderCheckbox(3, false)}
                </div>
              </div>
            </div>
          </div>

          <div className="case-study-page-block-7-mobile">
            <InfoBlock
              header={t("what-if")}
              col1={t("what-if-first")}
              col2={t("what-if-second")}
              col3={t("what-if-third")}
              img1={eye}
              img2={diagram}
              img3={notes}
            ></InfoBlock>
          </div>

          <div className="case-study-page-block-8-mobile">
            <Annotation direction="left" text={t("annotation")}></Annotation>
          </div>

          <div className="case-study-page-block-9">
            <div className="case-study-page-block-9-wrapper-mobile">
              <div className="new-member-header-mobile">{t("new-member-header")}</div>
              <div className="new-member-mobile">
                <div className="new-member-list-mobile">
                  <div className="list-item">
                    <div className="round"></div>
                    <div className="list-item-text">
                      {t("list-item-text-1")}
                    </div>
                  </div>
                  <div className="list-item">
                    <div className="round"></div>
                    <div className="list-item-text">
                      {t("list-item-text-2")}
                    </div>
                  </div>
                  <div className="list-item">
                    <div className="round"></div>
                    <div className="list-item-text">
                      {t("list-item-text-3")}
                    </div>
                  </div>
                  <div className="list-item">
                    <div className="round"></div>
                    <div className="list-item-text">
                      {t("list-item-text-4")}
                    </div>
                  </div>
                  <div className="list-item">
                  <div width="30px"><div className="round"></div></div>
                    <div className="list-item-text">
                      {t("list-item-text-5")}
                    </div>
                  </div>
                  <div className="list-item">
                  <div width="30px"><div className="round"></div></div>
                    <div className="list-item-text">
                      {t("list-item-text-6")}
                    </div>
                  </div>
                  <div className="list-item">
                  <div width="30px"><div className="round"></div></div>
                    <div className="list-item-text">
                      {t("list-item-text-7")}
                    </div>
                  </div>
                  <div className="list-item">
                    <div width="30px"><div className="round"></div></div>
                    <div className="list-item-text">
                      {t("list-item-text-8")}
                    </div>
                  </div>
                </div>
                <div className="new-member-img-mobile"></div>
              </div>
              <div className="new-member-result-mobile">{t("new-member-result")}</div>
            </div>
          </div>
        </div>
      )}

      {DefaultCaseStudyPage && (
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
                <div className="layout-img">
                  <div className="approach-text-item-1">
                    {t("approach-text-item-1")}
                  </div>
                </div>
              </div>
              <div className="approach-img-2">
                <div className="layout-img">
                  <div className="approach-text-item-2">
                    {t("approach-text-item-2")}
                  </div>
                </div>
              </div>
            </div>
            <div className="images-approach-wrapper">
              <div className="approach-img-3">
                <div className="layout-img">
                  <div className="approach-text-item-3">
                    {t("approach-text-item-3")}
                  </div>
                </div>
              </div>
              <div className="approach-img-4">
                <div className="layout-img">
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
                    <div className=" ergonza-text-item-1">
                      {t("ergonza-text-item-1")}
                    </div>
                  </div>

                  <div className="comparison-item">
                    <div className="ergonza-item-header ergonza-assessment">
                      {t("ergonza-assessment")}
                    </div>
                    <div className=" ergonza-text-item-2">
                      {t("ergonza-text-item-2")}
                    </div>
                  </div>

                  <div className="comparison-item">
                    <div className="ergonza-item-header ergonza-recruitment">
                      {t("ergonza-recruitment")}
                    </div>
                    <div className=" ergonza-text-item-3">
                      {t("ergonza-text-item-3")}
                    </div>
                  </div>

                  <div className="comparison-item comparison-item-last">
                    <div className="ergonza-item-header ergonza-education">
                      {t("ergonza-education")}
                    </div>
                    <div className=" ergonza-text-item-4">
                      {t("ergonza-text-item-4")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="case-study-page-block-6">
            <div className="hybrid-office">
              <div className="hybrid-office-main-header">
                {t("hybrid-office-main-header")}
              </div>
              <div className="hybrid-office-main-text">
                {t("hybrid-office-main-text")}
              </div>
            </div>
            <div className="case-study-page-block-6-wrapper">
              <div className="hybrid-office-header">
                {t("hybrid-office-header")}
              </div>
              <div className="images-approach-wrapper">
                <div className="hybrid-office-item">
                  <div className="approach-text-item-1 hybrid">
                    <b className="bold">1</b>
                    {t("hybrid-office-text-item-1")}
                  </div>
                </div>
                <div className="hybrid-office-item">
                  <div className="approach-text-item-2 hybrid">
                    <b className="bold">2</b>
                    {t("hybrid-office-text-item-2")}
                  </div>
                </div>
              </div>
              <div className="images-approach-wrapper">
                <div className="hybrid-office-item">
                  <div className="approach-text-item-3 hybrid">
                    <b className="bold">3</b>
                    {t("hybrid-office-text-item-3")}
                  </div>
                </div>
                <div className="hybrid-office-item">
                  <div className="approach-text-item-4 hybrid">
                    <b className="bold">4</b>
                    {t("hybrid-office-text-item-4")}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="case-study-page-block-7">
            <InfoBlock
              header={t("what-if")}
              col1={t("what-if-first")}
              col2={t("what-if-second")}
              col3={t("what-if-third")}
              img1={eye}
              img2={diagram}
              img3={notes}
            ></InfoBlock>
          </div>
          <div className="case-study-page-block-8">
            <Annotation direction="left" text={t("annotation")}></Annotation>
          </div>
          <div className="case-study-page-block-9">
            <div className="case-study-page-block-9-wrapper">
              <div className="new-member-header">{t("new-member-header")}</div>
              <div className="new-member">
                <div className="new-member-list">
                  <div className="list-item">
                    <div className="round"></div>
                    <div className="list-item-text">
                      {t("list-item-text-1")}
                    </div>
                  </div>
                  <div className="list-item">
                    <div className="round"></div>
                    <div className="list-item-text">
                      {t("list-item-text-2")}
                    </div>
                  </div>
                  <div className="list-item">
                    <div className="round"></div>
                    <div className="list-item-text">
                      {t("list-item-text-3")}
                    </div>
                  </div>
                  <div className="list-item">
                    <div className="round"></div>
                    <div className="list-item-text">
                      {t("list-item-text-4")}
                    </div>
                  </div>
                  <div className="list-item">
                    <div className="round"></div>
                    <div className="list-item-text">
                      {t("list-item-text-5")}
                    </div>
                  </div>
                  <div className="list-item">
                    <div className="round"></div>
                    <div className="list-item-text">
                      {t("list-item-text-6")}
                    </div>
                  </div>
                  <div className="list-item">
                    <div className="round"></div>
                    <div className="list-item-text">
                      {t("list-item-text-7")}
                    </div>
                  </div>
                  <div className="list-item">
                    <div className="round"></div>
                    <div className="list-item-text">
                      {t("list-item-text-8")}
                    </div>
                  </div>
                </div>
                <div className="new-member-img"></div>
              </div>
              <div className="new-member-result">{t("new-member-result")}</div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};
