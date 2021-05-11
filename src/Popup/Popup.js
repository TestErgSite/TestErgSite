import "./Popup.scss";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from 'react-redux';
import { hidePopupAsync } from '../redux/actions'

export const Popup = (props) => {
  const DefaultPopup = useMediaQuery({ query: '(min-width: 376px)' });
  const MobilePopup = useMediaQuery({ query: '(max-width: 375px)' });

  const { t } = useTranslation();

  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.isActive);

  return(
    <>
    {MobilePopup &&
      <div className="popup-wrapper-mobile">
      <form className={`form-mobile ${isActive === 'visible' ? 'visible' : ''}  ${isActive === 'animate' ? 'visible animate' : ''}`}>
          <div className="get-started-form">
          {t("contact-us")}
          <div className="close-popup" onClick={() => dispatch(hidePopupAsync())}></div>
          </div>
          <input className="name popup-input" placeholder={`${t("name")}`}></input>
          <input className="email popup-input" placeholder="Email"></input>
          <input className="company popup-input" placeholder={`${t("company")}`}></input>
          <button type="submit" type="button" className="popup-button-mobile">{t("send")}</button>
        </form>
      </div>
      }

      {DefaultPopup &&
      <div className="popup-wrapper">
      <form className={`form ${isActive === 'visible' ? 'visible' : ''}  ${isActive === 'animate' ? 'visible animate' : ''}`}>
          <div className="get-started-form">
          {t("contact-us")}
          <div className="close-popup" onClick={() => dispatch(hidePopupAsync())}></div>
          </div>
          <input className="name popup-input" placeholder={`${t("name")}`}></input>
          <input className="email popup-input" placeholder="Email"></input>
          <input className="company popup-input" placeholder={`${t("company")}`}></input>
          <button type="submit" type="button" className="popup-button-mobile">{t("send")}</button>
        </form>
      </div>
      }
      </>
  )
};