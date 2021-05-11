import React from "react";
import "./HowItWorksStep3.scss";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

export const HowItWorksStep3 = () => {
  const DefaultHowItWorksStep3 = useMediaQuery({ query: "(min-width: 376px)" });
  const MobileHowItWorksStep3 = useMediaQuery({ query: "(max-width: 375px)" });

  const { t } = useTranslation();

  return (
    <>
      {MobileHowItWorksStep3 && (
        <div className="how-it-works-step-3-mobile">
          <div className="how-it-works-step-3-wrapper-mobile">
            <div className="ready-to-use-tool-mobile">
              <div className="ready-to-use-tool-header-mobile">
                {t("ready-to-use-tool-header")}
              </div>
              <div className="ready-to-use-tool-item-mobile ready-to-use-tool-item-1">
                {t("ready-to-use-tool-item-1")}
              </div>
              <div className="ready-to-use-tool-item-mobile ready-to-use-tool-item-2">
                {t("ready-to-use-tool-item-2")}
              </div>
              <div className="ready-to-use-tool-item-mobile  ready-to-use-tool-item-3">
                {t("ready-to-use-tool-item-3")}
              </div>
            </div>
            <div className="ready-to-use-tool-img-mobile"></div>
          </div>
        </div>
      )}

      {DefaultHowItWorksStep3 && (
        <div className="how-it-works-step-3">
          <div className="how-it-works-step-3-wrapper">
            <div className="ready-to-use-tool">
              <div className="ready-to-use-tool-header">
                {t("ready-to-use-tool-header")}
              </div>
              <div className="ready-to-use-tool-item ready-to-use-tool-item-1">
                {t("ready-to-use-tool-item-1")}
              </div>
              <div className="ready-to-use-tool-item ready-to-use-tool-item-2">
                {t("ready-to-use-tool-item-2")}
              </div>
              <div className="ready-to-use-tool-item  ready-to-use-tool-item-3">
                {t("ready-to-use-tool-item-3")}
              </div>
            </div>
            <div className="ready-to-use-tool-img"></div>
          </div>
        </div>
      )}
    </>
  );
};
