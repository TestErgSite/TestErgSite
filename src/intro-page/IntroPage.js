import React from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
import "./IntroPage.scss";
import { GetStaerted } from "../get-started-button/GetStaerted";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export const IntoPage = (props) => {
  const { t } = useTranslation();

  const MobileIntro = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 375 });
    return isMobile ? children : null;
  };

  const DefaultIntro = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 376 });
    return isNotMobile ? children : null;
  };

  return (
    <>
      <MobileIntro>
      <div className="intro-page-mobile">
          <div className="block-1-mobile">
            <div className="layout">
              <div className="psy-comfort-org-mobile">
                <div className="psy-comfort-org-header-mobile slogan-mobile">
                  {t("psy-comfort-org-header")}
                </div>
                <div className="psy-comfort-org-subheader-mobile">
                  {t("psy-comfort-org-subheader")}
                </div>
                <Link to="/get-started">
                  <GetStaerted />
                </Link>
              </div>
            </div>
          </div>

          <div className="block-2-mobile">
            <div className="statistics-mobile">
              <div className="team-engagement-mobile">
                <div className="team-engagement-wrapper-mobile">
                  <span className="team-engagement-procent-mobile">70%</span>
                  <span className="team-engagement-text-mobile">
                    {t("team-engagement")}
                  </span>
                  <Link to="/get-started">
                    <GetStaerted />
                  </Link>
                </div>
                <div className="team-engagement-img-mobile"></div>
              </div>
              <div className="team-leader-engagement-mobile">
              <div className="team-leader-engagement-wrapper-mobile">
                  <span className="team-leader-engagement-x-mobile">12x</span>
                  <span className="team-leader-engagement-text-mobile">
                    {t("team-leader-engagement")}
                  </span>
                  <Link to="/get-started">
                    <GetStaerted />
                  </Link>
                </div>
                <div className="team-leader-engagement-img-mobile"></div>
               
              </div>
            </div>
          </div>

          <div className="block-3-mobile">
            <div className="layout">
              <div className="higher-engagment-mobile">
                <div className="higher-engagment-wrapper-mobile">
                  <div className="higher-engagment-header-mobile">
                    {t("higher-engagment-header")}
                  </div>
                  <div className="higher-engagment-subheader-mobile">
                    {t("higher-engagment-subheader")}
                  </div>
                </div>

                <div className="indicators-mobile">
                  <div className="indicators-turnover">
                    <div className="procent-wrapper-mobile"><span className="procent-mobile">24</span><span className="procent-symb-mobile">%</span></div>
                    <span className="turnover-mobile">{t("turnover")}</span>
                  </div>
                  <div className="indicators-productivity">
                    <div className="procent-wrapper-mobile"><span className="procent-mobile">17</span><span className="procent-symb-mobile">%</span></div>
                    <span className="productivity-mobile">{t("productivity")}</span>
                  </div>
                  <div className="indicators-absenteeism">
                    <div  className="procent-wrapper-mobile"><span className="procent-mobile">41</span><span className="procent-symb-mobile">%</span></div>
                    <span className="absenteeism-mobile">{t("absenteeism")}</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </MobileIntro>

      <DefaultIntro>
        <div className="intro-page">
          <div className="block-1">
            <div className="layout">
              <div className="psy-comfort-org">
                <div className="psy-comfort-org-header slogan">
                  {t("psy-comfort-org-header")}
                </div>
                <div className="psy-comfort-org-subheader">
                  {t("psy-comfort-org-subheader")}
                </div>
                <Link to="/get-started">
                  <GetStaerted />
                </Link>
              </div>
            </div>
          </div>
          <div className="block-2">
            <div className="statistics">
              <div className="team-engagement">
                <div className="team-engagement-wrapper">
                  <span className="team-engagement-procent">70%</span>
                  <span className="team-engagement-text">
                    {t("team-engagement")}
                  </span>
                  <Link to="/get-started">
                    <GetStaerted />
                  </Link>
                </div>
                <div className="team-engagement-img"></div>
              </div>
              <div className="team-leader-engagement">
                <div className="team-leader-engagement-img"></div>
                <div className="team-leader-engagement-wrapper">
                  <span className="team-leader-engagement-x">12x</span>
                  <span className="team-leader-engagement-text">
                    {t("team-leader-engagement")}
                  </span>
                  <Link to="/get-started">
                    <GetStaerted />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="block-3">
            <div className="layout">
              <div className="higher-engagment">
                <div className="higher-engagment-wrapper">
                  <div className="higher-engagment-header">
                    {t("higher-engagment-header")}
                  </div>
                  <div className="higher-engagment-subheader">
                    {t("higher-engagment-subheader")}
                  </div>
                </div>
                <div className="indicators">
                  <div className="indicators-turnover">
                    <span className="procent">24%</span>
                    <span className="turnover">{t("turnover")}</span>
                  </div>
                  <div className="indicators-productivity">
                    <span className="procent">17%</span>
                    <span className="productivity">{t("productivity")}</span>
                  </div>
                  <div className="indicators-absenteeism">
                    <span className="procent">41%</span>
                    <span className="absenteeism">{t("absenteeism")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DefaultIntro>
    </>
  );
};
