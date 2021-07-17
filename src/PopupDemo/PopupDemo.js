import React from "react";
import './PopupDemo.scss';
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { hidePopupDemoAsync } from "../redux/actions";

export const PopupDemo = () => {
  const DefaultPopupDemo = useMediaQuery({ query: "(min-width: 429px)" });
  const MobilePopupDemo = useMediaQuery({ query: "(max-width: 428px)" });

  const { t } = useTranslation();


  const url = useSelector((state) => state.url);
  const urlMobile = useSelector((state) => state.urlMobile);
  const demo = useSelector((state) => state.demo);
  const dispatch = useDispatch();

  return (
    <>
      {MobilePopupDemo && <div className="popup-wrapper-mobile">
      <div
            className={`form-mobile demo-popup ${demo === "visible" ? "visible" : ""}  ${
              demo === "animate" ? "visible animate" : ""
            }`}
          >
            <div className="get-started-form">
              <div
                className="close-popup"
                onClick={() => dispatch(hidePopupDemoAsync())}
              ></div>
            </div>
            <div className="choose-v">
              <Link to={{ pathname: url }} target="_blank" className="mobile-v v">
                <div className="desktop-v v">{t("des-v")}</div>
              </Link>
              <Link to={{ pathname: urlMobile }} target="_blank" className="mobile-v v">
                <div className="mobile-v v">{t("mob-v")}</div>
              </Link>
            </div>
          </div>
        </div>}

      {DefaultPopupDemo && (
        <div className="popup-wrapper">
          <div
            className={`form demo-popup ${demo === "visible" ? "visible" : ""}  ${
              demo === "animate" ? "visible animate" : ""
            }`}
          >
            <div className="get-started-form">
              <div
                className="close-popup"
                onClick={() => dispatch(hidePopupDemoAsync())}
              ></div>
            </div>
            <div className="choose-v">
              <Link to={{ pathname: url }} target="_blank" className="mobile-v v">
                <div className="desktop-v v">{t("des-v")}</div>
              </Link>
              <Link to={{ pathname: urlMobile }} target="_blank" className="mobile-v v">
                <div className="mobile-v v">{t("mob-v")}</div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
