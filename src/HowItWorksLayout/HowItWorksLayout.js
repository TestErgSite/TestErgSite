import React, { useState, useEffect, useCallback, useRef } from "react";
import "./HowItWorksLayout.scss";
import { HowItWorksStep1 } from "../HowItWorksStep1/HowItWorksStep1";
import { HowItWorksStep2 } from "../HowItWorksStep2/HowItWorksStep2";
import { HowItWorksStep3 } from "../HowItWorksStep3/HowItWorksStep3";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { Popup } from "../Popup/Popup";
import { useSelector, useDispatch } from "react-redux";
import { PopupDemo } from '../PopupDemo/PopupDemo';
import { hidePopupAsync, hidePopupDemoAsync } from "../redux/actions";

export const HowItWorksLayout = () => {
  const DefaultCheckbox = useMediaQuery({ query: "(min-width: 429px)" });
  const MobileCheckbox = useMediaQuery({ query: "(max-width: 428px)" });

  const DefaultHowItWorksLayout = useMediaQuery({
    query: "(min-width: 429px)",
  });
  const MobileHowItWorksLayout = useMediaQuery({ query: "(max-width: 428px)" });

  const { t } = useTranslation();

  const isActive = useSelector((state) => state.isActive);
  const demo = useSelector((state) => state.demo);
  const dispatch = useDispatch();

  const stopTimeout = useCallback(() => {
    clearTimeout(timeoutRef.current);
  }, [])
  const timeoutRef = useRef();
  const [activeCheckbox, setActiveCheckbox] = useState(1);

  const timeoutCallback = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setActiveCheckbox((activeCheckbox) => activeCheckbox === 3 ? 1 : (activeCheckbox + 1));
      timeoutCallback();
    }, 5000);
  }, [activeCheckbox, setActiveCheckbox]);

  useEffect(() => {
    timeoutCallback();
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const renderCheckbox = (i) => {
    return (
      <>
        {MobileCheckbox && (
          <>
            <div
              onClick={() => onCheckboxClick(i)}
              className={
                "how-it-works-checkbox " +
                (activeCheckbox === i ? "active" : "")
              }
            >
              <div className="how-it-works-checkbox__inner"></div>
              <div
              className={
                `how-it-works-checkbox-num-mobile num-${i}-mobile ` +
                (activeCheckbox === i ? "active" : "")
              }
            >
              {i}
            </div>
            </div>
          </>
        )}
        {DefaultCheckbox && (
          <>
            <div
              onClick={() => onCheckboxClick(i)}
              className={
                "how-it-works-checkbox " +
                (activeCheckbox === i ? "active" : "")
              }
            >
              <div className="how-it-works-checkbox__inner"></div>
            </div>
            <div
              className={
                `how-it-works-checkbox-num num-${i} ` +
                (activeCheckbox === i ? "active" : "")
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
    setActiveCheckbox(i);
    stopTimeout();
  };

  return (
    <>
      {MobileHowItWorksLayout && (
        <div className="how-it-works-layout-mobile">
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
          {activeCheckbox === 1 ? <HowItWorksStep1 /> : null}
          {activeCheckbox === 2 ? <HowItWorksStep2 /> : null}
          {activeCheckbox === 3 ? <HowItWorksStep3 /> : null}
        </div>
      )}

      {DefaultHowItWorksLayout && (
        <div className="how-it-works-layout">
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
          {activeCheckbox === 1 ? <HowItWorksStep1 /> : null}
          {activeCheckbox === 2 ? <HowItWorksStep2 /> : null}
          {activeCheckbox === 3 ? <HowItWorksStep3 /> : null}
        </div>
      )}
    </>
  );
};
