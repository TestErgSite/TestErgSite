import React from "react";
import "./Platfrom.scss";
import { useTranslation } from "react-i18next";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { PlatformHeader } from "../Platform-intro-app/Platform-header/PlatformHeader";
import PlatformSidebar from "../Platform-intro-app/Platform-sidebar/PlatformSidebar";
import PlatfromOrgChart  from "../Platform-intro-app/Platform-org-chart/PlatfromOrgChart";
import { useMediaQuery } from "react-responsive";

export const Platfrom = () => {
  const { t } = useTranslation();

  const MobilePlatform = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 375 });
    return isMobile ? children : null;
  };

  const DefaultPlatform = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 376 });
    return isNotMobile ? children : null;
  };

    return (
      <>
      <MobilePlatform>
        <Header />
        <div className="ergonza-platform-mobile">
          <div className="ergonza-platform-wrapper-mobile">
            <div className="ergonza-platform-header-mobile">
              {t("ergonza-platform-header")}
            </div>
            <div className="ergonza-platform-intro-mobile">
              <PlatformHeader />
              <div className="ergonza-platform-content">
                <PlatformSidebar />
                <div className="content-wrapper-mobile">
                  <PlatfromOrgChart />
                </div>
              </div>
            </div>
            <div className="ergonza-platform-info">
              <div className="ergonza-platform-info-col-1">
                <div className="ergonza-platform-employers">
                  <div className="ergonza-platform-employers-img ergonza-platform-item"></div>
                  <div className="ergonza-platform-employers-header ergonza-platform-item">
                    {t("ergonza-platform-employers-header")}
                  </div>
                  <div className="ergonza-platform-employers-text ergonza-platform-item">
                    {t("ergonza-platform-employers-text")}
                  </div>
                </div>

                <div className="ergonza-platform-barometer">
                  <div className="ergonza-platform-barometer-img ergonza-platform-item"></div>
                  <div className="ergonza-platform-barometer-header ergonza-platform-item">
                    {t("ergonza-platform-barometer-header")}
                  </div>
                  <div className="ergonza-platform-barometer-text ergonza-platform-item">
                    {t("ergonza-platform-barometer-text")}
                  </div>
                </div>

                <div className="ergonza-platform-enneagram">
                  <div className="ergonza-platform-enneagram-img ergonza-platform-item"></div>
                  <div className="ergonza-platform-enneagram-header ergonza-platform-item">
                    {t("ergonza-platform-enneagram-header")}
                  </div>
                  <div className="ergonza-platform-enneagram-text ergonza-platform-item">
                    {t("ergonza-platform-enneagram-text")}
                  </div>
                </div>
              </div>
              <div className="ergonza-platform-info-col-2"></div>
              <div className="ergonza-platform-info-col-3">
                <div className="ergonza-platform-org-chart">
                  <div className="ergonza-platform-org-chart-img ergonza-platform-item"></div>
                  <div className="ergonza-platform-org-chart-header ergonza-platform-item">
                    {t("ergonza-platform-org-chart-header")}
                  </div>
                  <div className="ergonza-platform-org-chart-text ergonza-platform-item">
                    {t("ergonza-platform-org-chart-text")}
                  </div>
                </div>

                <div className="ergonza-platform-mbti">
                  <div className="ergonza-platform-mbti-img ergonza-platform-item"></div>
                  <div className="ergonza-platform-mbti-header ergonza-platform-item">
                    {t("ergonza-platform-mbti-header")}
                  </div>
                  <div className="ergonza-platform-mbti-text ergonza-platform-item">
                    {t("ergonza-platform-mbti-text")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </MobilePlatform>

      <DefaultPlatform>
        <Header />
        <div className="ergonza-platform">
          <div className="ergonza-platform-wrapper">
            <div className="ergonza-platform-header">
              {t("ergonza-platform-header")}
            </div>
            <div className="ergonza-platform-intro">
              <PlatformHeader />
              <div className="ergonza-platform-content">
                <PlatformSidebar />
                <div className="content-wrapper">
                  <PlatfromOrgChart />
                </div>
              </div>
            </div>
            <div className="ergonza-platform-info">
              <div className="ergonza-platform-info-col-1">
                <div className="ergonza-platform-employers">
                  <div className="ergonza-platform-employers-img ergonza-platform-item"></div>
                  <div className="ergonza-platform-employers-header ergonza-platform-item">
                    {t("ergonza-platform-employers-header")}
                  </div>
                  <div className="ergonza-platform-employers-text ergonza-platform-item">
                    {t("ergonza-platform-employers-text")}
                  </div>
                </div>

                <div className="ergonza-platform-barometer">
                  <div className="ergonza-platform-barometer-img ergonza-platform-item"></div>
                  <div className="ergonza-platform-barometer-header ergonza-platform-item">
                    {t("ergonza-platform-barometer-header")}
                  </div>
                  <div className="ergonza-platform-barometer-text ergonza-platform-item">
                    {t("ergonza-platform-barometer-text")}
                  </div>
                </div>

                <div className="ergonza-platform-enneagram">
                  <div className="ergonza-platform-enneagram-img ergonza-platform-item"></div>
                  <div className="ergonza-platform-enneagram-header ergonza-platform-item">
                    {t("ergonza-platform-enneagram-header")}
                  </div>
                  <div className="ergonza-platform-enneagram-text ergonza-platform-item">
                    {t("ergonza-platform-enneagram-text")}
                  </div>
                </div>
              </div>
              <div className="ergonza-platform-info-col-2"></div>
              <div className="ergonza-platform-info-col-3">
                <div className="ergonza-platform-org-chart">
                  <div className="ergonza-platform-org-chart-img ergonza-platform-item"></div>
                  <div className="ergonza-platform-org-chart-header ergonza-platform-item">
                    {t("ergonza-platform-org-chart-header")}
                  </div>
                  <div className="ergonza-platform-org-chart-text ergonza-platform-item">
                    {t("ergonza-platform-org-chart-text")}
                  </div>
                </div>

                <div className="ergonza-platform-mbti">
                  <div className="ergonza-platform-mbti-img ergonza-platform-item"></div>
                  <div className="ergonza-platform-mbti-header ergonza-platform-item">
                    {t("ergonza-platform-mbti-header")}
                  </div>
                  <div className="ergonza-platform-mbti-text ergonza-platform-item">
                    {t("ergonza-platform-mbti-text")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        </DefaultPlatform>
      </>
    );
  }

