import "./Popup.scss";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { hidePopupAsync } from "../redux/actions";
import { Link } from "react-router-dom";

export const Popup = () => {
  const DefaultPopup = useMediaQuery({ query: "(min-width: 376px)" });
  const MobilePopup = useMediaQuery({ query: "(max-width: 375px)" });

  const { t } = useTranslation();

  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.isActive);

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [companyInput, setCompanyInput] = useState("");
  const [isFormSend, setFormSend] = useState(false);

  const [isNameEmpty, setNameEmpty] = useState(false);
  const [isEmailEmpty, setEmailEmpty] = useState(false);
  const [isCompanyEmpty, setCompanyEmpty] = useState(false);

  const handleInput = (val, input) => {
    if (input === "name") {
      setNameInput(val);
    }
    if (input === "email") {
      setEmailInput(val);
    }
    if (input === "company") {
      setCompanyInput(val);
    }
  };

  const onSendingForm = () => {
    if (companyInput && nameInput && emailInput) {
      setFormSend(true);
    }
    if (!nameInput) {
      setNameEmpty(true);
      if (!emailInput) {
        setEmailEmpty(true);
      } else {
        setEmailEmpty(false);
      }
      if (!companyInput) {
        setCompanyEmpty(true);
      } else {
        setCompanyEmpty(false);
      }
    } else {
      setNameEmpty(false);
    }

    if (!emailInput) {
      setEmailEmpty(true);
      if (!nameInput) {
        setNameEmpty(true);
      } else {
        setNameEmpty(false);
      }
      if (!companyInput) {
        setCompanyEmpty(true);
      } else {
        setCompanyEmpty(false);
      }
    } else {
      setEmailEmpty(false);
    }

    if (!companyInput) {
      setCompanyEmpty(true);
      if (!emailInput) {
        setEmailEmpty(true);
      } else {
        setEmailEmpty(false);
      }
      if (!nameInput) {
        setNameEmpty(true);
      } else {
        setNameEmpty(false);
      }
    } else {
      setCompanyEmpty(false);
    }
  };

  return (
    <>
      {MobilePopup && (
        <div className="popup-wrapper-mobile">
          <form
            className={`form-mobile ${
              isActive === "visible" ? "visible" : ""
            }  ${isActive === "animate" ? "visible animate" : ""}`}
          >
            {isFormSend ? (
              <div className="form-send-wrapper">
                <div className="form-send">{t("form-send")}</div>
                <div
                  className="close-popup close-form-mobile"
                  onClick={() => dispatch(hidePopupAsync())}
                ></div>
                <Link to="/" onClick={() => dispatch(hidePopupAsync())}>
                  <div className="back-home">{t("back-home")}</div>
                </Link>
              </div>
            ) : (
              <>
                <div className="get-started-form">
                  {t("contact-us")}
                  <div
                    className="close-popup"
                    onClick={() => dispatch(hidePopupAsync())}
                  ></div>
                </div>
                <input
                  className={`name popup-input ${isNameEmpty ? "warn" : ""}`}
                  placeholder={`${t("name")}`}
                  value={nameInput}
                  onChange={(e) => handleInput(e.target.value, "name")}
                ></input>
                {isNameEmpty ? (
                  <div className="empty-field">{t("empty-field")}</div>
                ) : (
                  <div className="empty-div"></div>
                )}
                <input
                  className={`email popup-input ${isEmailEmpty ? "warn" : ""}`}
                  placeholder="Email"
                  value={emailInput}
                  onChange={(e) => handleInput(e.target.value, "email")}
                ></input>
                {isEmailEmpty ? (
                  <div className="empty-field">{t("empty-field")}</div>
                ) : (
                  <div className="empty-div"></div>
                )}
                <input
                  className={`company popup-input ${
                    isCompanyEmpty ? "warn" : ""
                  }`}
                  placeholder={`${t("company")}`}
                  value={companyInput}
                  onChange={(e) => handleInput(e.target.value, "company")}
                ></input>
                {isCompanyEmpty ? (
                  <div className="empty-field">{t("empty-field")}</div>
                ) : (
                  <div className="empty-div"></div>
                )}
                <button
                  type="submit"
                  type="button"
                  className="popup-button-mobile"
                  onClick={() => onSendingForm()}
                >
                  {t("send")}
                </button>
              </>
            )}
          </form>
        </div>
      )}

      {DefaultPopup && (
        <div className="popup-wrapper">
          <form
            className={`form ${isActive === "visible" ? "visible" : ""}  ${
              isActive === "animate" ? "visible animate" : ""
            }`}
            action="mailto:aleks.liadova@gmail.com" method="post"
          >
            {isFormSend ? (
              <div className="form-send-wrapper">
                <div className="form-send">{t("form-send")}</div>
                <div
                  className="close-popup close-form"
                  onClick={() => dispatch(hidePopupAsync())}
                ></div>
                <Link to="/" onClick={() => dispatch(hidePopupAsync())}>
                  <div className="back-home">{t("back-home")}</div>
                </Link>
              </div>
            ) : (
              <>
                <div className="get-started-form">
                  {t("contact-us")}
                  <div
                    className="close-popup"
                    onClick={() => dispatch(hidePopupAsync())}
                  ></div>
                </div>
                <input
                  className={`name popup-input ${isNameEmpty ? "warn" : ""}`}
                  placeholder={`${t("name")}`}
                  value={nameInput}
                  onChange={(e) => handleInput(e.target.value, "name")}
                ></input>
                {isNameEmpty ? (
                  <div className="empty-field">{t("empty-field")}</div>
                ) : (
                  <div className="empty-div"></div>
                )}
                <input
                  className={`email popup-input ${isEmailEmpty ? "warn" : ""}`}
                  placeholder="Email"
                  type="email"
                  value={emailInput}
                  onChange={(e) => handleInput(e.target.value, "email")}
                ></input>
                {isEmailEmpty ? (
                  <div className="empty-field">{t("empty-field")}</div>
                ) : (
                  <div className="empty-div"></div>
                )}
                <input
                  className={`company popup-input ${
                    isCompanyEmpty ? "warn" : ""
                  }`}
                  placeholder={`${t("company")}`}
                  value={companyInput}
                  onChange={(e) => handleInput(e.target.value, "company")}
                ></input>
                {isCompanyEmpty ? (
                  <div className="empty-field">{t("empty-field")}</div>
                ) : (
                  <div className="empty-div"></div>
                )}
                {}
                <button
                  type="submit"
                  type="button"
                  className="popup-button-mobile"
                  onClick={() => onSendingForm()}
                >
                  {t("send")}
                </button>
              </>
            )}
          </form>
        </div>
      )}
    </>
  );
};
