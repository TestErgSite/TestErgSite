import React from "react";
import "./HowItWorksStep2.scss";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

export const HowItWorksStep2 = () => {

  const DefaultHowItWorksStep2  = useMediaQuery({ query: '(min-width: 429px)' });
  const MobileHowItWorksStep2  = useMediaQuery({ query: '(max-width: 428px)' });

  const { t } = useTranslation();

    return (
      <>
      {MobileHowItWorksStep2 &&
      <div className="how-it-works-step-2-mobile">
        <div className="how-it-works-step-2-wrapper-mobile">
          <div className="questionnaire-mobile">
            <div className="questionnaire-header-mobile">
              {t("questionnaire-header")}
            </div>
            <div className="questionnaire-item-mobile questionnaire-item-1">
              {t("questionnaire-item-1")}
            </div>
            <div className="questionnaire-item-mobile questionnaire-item-2">
              {t("questionnaire-item-2")}
            </div>
            <div className="questionnaire-item-mobile questionnaire-item-3">
              {t("questionnaire-item-3")}
            </div>
            <div className="questionnaire-item-mobile questionnaire-item-4">
              {t("questionnaire-item-4")}
            </div>
          </div>
          <div className="questionnaire-img-mobile"></div>
        </div>
      </div>
      }

      {DefaultHowItWorksStep2 &&
      <div className="how-it-works-step-2">
        <div className="how-it-works-step-2-wrapper">
          <div className="questionnaire">
            <div className="questionnaire-header">
              {t("questionnaire-header")}
            </div>
            <div className="questionnaire-item questionnaire-item-1">
              {t("questionnaire-item-1")}
            </div>
            <div className="questionnaire-item questionnaire-item-2">
              {t("questionnaire-item-2")}
            </div>
            <div className="questionnaire-item questionnaire-item-3">
              {t("questionnaire-item-3")}
            </div>
            <div className="questionnaire-item questionnaire-item-4">
              {t("questionnaire-item-4")}
            </div>
          </div>
          <div className="questionnaire-img"></div>
        </div>
      </div>
      }
      </>
    );
}

