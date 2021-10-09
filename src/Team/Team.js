import "./Team.scss";
import React, { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
import { useMediaQuery } from "react-responsive";
import { useSelector, useDispatch } from "react-redux";
import { hidePopupAsync, hidePopupDemoAsync } from "../redux/actions";

export const Team = () => {
  const { t } = useTranslation();

  const DefaultTeam = useMediaQuery({ query: "(min-width: 429px)" });
  const MobileTeam = useMediaQuery({ query: "(max-width: 428px)" });


  const isActive = useSelector((state) => state.isActive);
  const dispatch = useDispatch();

  return (
    <>
      {MobileTeam && (
        <div className="team-mobile">
          <div
            className={`opacity ${isActive !== "none"  ? "overlay" : ""}`}
            onClick={() => dispatch(hidePopupAsync())}
          ></div>

        </div>
      )}

      {DefaultTeam && (
        <>
          <div
            className="opacity"
            onClick={() => dispatch(hidePopupAsync())}
          ></div>
          <div className="team-wrapper">

          </div>
        </>
      )}
  
    </>
  );
};
