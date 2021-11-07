import "./DemoButton.scss";
import React from "react";
import "../i18n";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { useSelector, useDispatch  } from "react-redux";
import { showPopupDemoAsync } from "../redux/actions";

export const DemoButton = () => {
  const DefaultDemoButton = useMediaQuery({ query: "(min-width: 429px)" });
  const MobileDemoButton = useMediaQuery({ query: "(max-width: 428px)" });

  const demo = useSelector((state) => state.demo);

  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <>
      {MobileDemoButton && (
        <button
          className="demo-button-mobile"
          onClick={() => dispatch(showPopupDemoAsync(demo))}
        >
          {t("demo")}
        </button>
      )}
      {DefaultDemoButton && (
        <button
          className="demo-button"
          onClick={() => dispatch(showPopupDemoAsync(demo))}
        >
          {t("demo")}
        </button>
      )}
    </>
  );
};
