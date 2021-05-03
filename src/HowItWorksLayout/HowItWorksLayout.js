import React, { useState } from "react";
import "./HowItWorksLayout.scss";
import { HowItWorksStep1 } from "../HowItWorksStep1/HowItWorksStep1";
import { HowItWorksStep2 } from "../HowItWorksStep2/HowItWorksStep2";
import { HowItWorksStep3 } from "../HowItWorksStep3/HowItWorksStep3";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

export const HowItWorksLayout = () => {
  const { t } = useTranslation();

  const MobileHowItWorksLayout = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 375 });
    return isMobile ? children : null;
  };

  const DefaultHowItWorksLayout = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 376 });
    return isNotMobile ? children : null;
  };
  
  const MobileCheckbox = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 375 });
    return isMobile ? children : null;
  };

  const DefaultCheckbox  = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 376 });
    return isNotMobile ? children : null;
  };

  const [checkboxes, setValues] = useState({
    1: true,
    2: false,
    3: false,
  });

  const renderCheckbox = (i) => {
    return (
      <>
      <MobileCheckbox>
        <div
          onClick={() => onCheckboxClick(i)}
          className={"how-it-works-checkbox " + (checkboxes[i] ? "active" : "")}
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
      </MobileCheckbox>
      <DefaultCheckbox>
        <div
          onClick={() => onCheckboxClick(i)}
          className={"how-it-works-checkbox " + (checkboxes[i] ? "active" : "")}
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
      </DefaultCheckbox>
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
      <MobileHowItWorksLayout>
        <div className="how-it-works-layout-mobile">
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
       
      </MobileHowItWorksLayout>

      <DefaultHowItWorksLayout>
        <div className="how-it-works-layout">
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
      </DefaultHowItWorksLayout>
    </>
  );
};
