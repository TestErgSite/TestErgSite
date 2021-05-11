import React, { useState } from "react";
import "./HowItWorksLayout.scss";
import { HowItWorksStep1 } from "../HowItWorksStep1/HowItWorksStep1";
import { HowItWorksStep2 } from "../HowItWorksStep2/HowItWorksStep2";
import { HowItWorksStep3 } from "../HowItWorksStep3/HowItWorksStep3";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { Popup } from "../Popup/Popup";
import { useSelector, useDispatch } from "react-redux";
import { hidePopupAsync } from "../redux/actions";

export const HowItWorksLayout = () => {
  const DefaultCheckbox = useMediaQuery({ query: "(min-width: 376px)" });
  const MobileCheckbox = useMediaQuery({ query: "(max-width: 375px)" });

  const DefaultHowItWorksLayout = useMediaQuery({
    query: "(min-width: 376px)",
  });
  const MobileHowItWorksLayout = useMediaQuery({ query: "(max-width: 375px)" });

  const { t } = useTranslation();

  const isActive = useSelector((state) => state.isActive);
  const dispatch = useDispatch();

  const [checkboxes, setValues] = useState({
    1: true,
    2: false,
    3: false,
  });

  const renderCheckbox = (i) => {
    return (
      <>
        {MobileCheckbox && (
          <>
            <div
              onClick={() => onCheckboxClick(i)}
              className={
                "how-it-works-checkbox " + (checkboxes[i] ? "active" : "")
              }
            >
              <div className="how-it-works-checkbox__inner"></div>
            </div>
            <div
              className={
                `how-it-works-checkbox-num-mobile num-${i}-mobile ` +
                (checkboxes[i] ? "active" : "")
              }
            >
              {i}
            </div>
          </>
        )}
        {DefaultCheckbox && (
          <>
            <div
              onClick={() => onCheckboxClick(i)}
              className={
                "how-it-works-checkbox " + (checkboxes[i] ? "active" : "")
              }
            >
              <div className="how-it-works-checkbox__inner"></div>
            </div>
            <div
              className={
                `how-it-works-checkbox-num num-${i} ` +
                (checkboxes[i] ? "active" : "")
              }
            >
              {i}
            </div>
          </>
        )}
      </>
    );
  };

  const onCheckboxClick = (i) => {
    setValues({
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
      {MobileHowItWorksLayout &&
        <div className="how-it-works-layout-mobile">
        <div className={`opacity ${isActive !== "none" ? "overlay" : ""}`} onClick={() => dispatch(hidePopupAsync())}></div>
        {isActive === "visible" || "animate" ? <Popup /> : null}
          <div className="how-it-works-layout-wrapper-mobile">
            <div className="how-it-works-layout-header-mobile">
              {t("how-it-works-layout-header")}
            </div>
          </div>
          <div className="how-it-works-guide">
            <div className="how-it-works-guide-wrapper">
              {renderCheckbox(1)}
              {renderCheckbox(2)}
              {renderCheckbox(3)}
            </div>
          </div>
          {checkboxes[1] ? <HowItWorksStep1 /> : null}
          {checkboxes[2] ? <HowItWorksStep2 /> : null}
          {checkboxes[3] ? <HowItWorksStep3 /> : null}
        </div>
      }

  {DefaultHowItWorksLayout &&
        <div className="how-it-works-layout">
        <div className={`opacity ${isActive !== "none" ? "overlay" : ""}`} onClick={() => dispatch(hidePopupAsync())}></div>
        {isActive === "visible" || "animate" ? <Popup /> : null}
          <div className="how-it-works-layout-wrapper">
            <div className="how-it-works-layout-header">
              {t("how-it-works-layout-header")}
            </div>
          </div>
          <div className="how-it-works-guide">
            <div className="how-it-works-guide-wrapper">
              {renderCheckbox(1)}
              {renderCheckbox(2)}
              {renderCheckbox(3)}
            </div>
          </div>
          {checkboxes[1] ? <HowItWorksStep1 /> : null}
          {checkboxes[2] ? <HowItWorksStep2 /> : null}
          {checkboxes[3] ? <HowItWorksStep3 /> : null}
        </div>
      }
    </>
  );
};
