import React, { useState } from "react";
import "./SliderMobile.scss";
import { useTranslation } from "react-i18next";

export const Slideshow = () => {
  const { t } = useTranslation();

  const [checkboxes, setValues] = useState({
    0: true,
    1: false,
    2: false,
    3: false,
  });

  const renderCheckbox = (i) => {
    return (
      <>
        <div
          onClick={() => onCheckboxClick(i)}
          className={"slider-checkbox " + (checkboxes[i] ? "active" : "")}
        >
          <div className="slider-checkbox__inner"></div>
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

  let currImg = Object.keys(checkboxes).find((key) => checkboxes[key] === true);

  return (
    <div className="slider-img">
      <div className="checkboxes-wrapper">
        {renderCheckbox(0)}
        {renderCheckbox(1)}
        {renderCheckbox(2)}
        {renderCheckbox(3)}
      </div>
      {Number(currImg) === 0 ? (
        <div className="slide-item-0">
          <div className="slide-item-0-text">
          {t("approach-text-item-1")}
          </div>
        </div>
      ) : null}
      {Number(currImg) === 1 ? (
        <div className="slide-item-1">
          <div className="slide-item-1-text">
          {t("approach-text-item-2")}
          </div>
        </div>
      ) : null}
      {Number(currImg) === 2 ? (
        <div className="slide-item-2">
          <div className="slide-item-2-text">
          {t("approach-text-item-3")}
          </div>
        </div>
      ) : null}
      {Number(currImg) === 3 ? (
        <div className="slide-item-3">
          <div className="slide-item-3-text">
          {t("approach-text-item-4")}
          </div>
        </div>
      ) : null}
    </div>
  );
};
