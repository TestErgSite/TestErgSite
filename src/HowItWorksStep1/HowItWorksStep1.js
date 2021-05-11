import React from "react";
import "./HowItWorksStep1.scss";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

export const HowItWorksStep1 = () => {

  const DefaultHowItWorksStep1  = useMediaQuery({ query: '(min-width: 376px)' });
  const MobileHowItWorksStep1  = useMediaQuery({ query: '(max-width: 375px)' });

  const { t } = useTranslation();

  return (
    <>
    {MobileHowItWorksStep1 &&
    <div className="how-it-works-step-1-mobile">
      <div className="how-it-works-step-1-wrapper-mobile">
        <div className="organizational-structure-mobile">
          <div className="organizational-structure-header-mobile">
            {t("organizational-structure-header")}
          </div>
          <div className="organizational-structure-item-mobile organizational-structure-item-1">
            {t("organizational-structure-item-1")}
          </div>
          <div className="organizational-structure-item-mobile organizational-structure-item-2">
            {t("organizational-structure-item-2")}
          </div>
          <div className="organizational-structure-item-mobile organizational-structure-item-3">
            {t("organizational-structure-item-3")}
          </div>
        </div>
        <div className="organizational-structure-img-mobile"></div>
      </div>
    </div>
    }
  
   {DefaultHowItWorksStep1 &&
    <div className="how-it-works-step-1">
  
      <div className="how-it-works-step-1-wrapper">
        <div className="organizational-structure">
          <div className="organizational-structure-header">
            {t("organizational-structure-header")}
          </div>
          <div className="organizational-structure-item organizational-structure-item-1">
            {t("organizational-structure-item-1")}
          </div>
          <div className="organizational-structure-item organizational-structure-item-2">
            {t("organizational-structure-item-2")}
          </div>
          <div className="organizational-structure-item organizational-structure-item-3">
            {t("organizational-structure-item-3")}
          </div>
        </div>
        <div className="organizational-structure-img"></div>
      </div>
    </div>
   }
    </>
  );
};
