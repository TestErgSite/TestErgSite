import React from "react";
import "../i18n.js";
import "./Platfrom.scss";
import { useTranslation } from "react-i18next";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { PlatformHeader } from "../Platform-intro-app/Platform-header/PlatformHeader";
import PlatformSidebar from "../Platform-intro-app/Platform-sidebar/PlatformSidebar";
import PlatfromOrgChart from "../Platform-intro-app/Platform-org-chart/PlatfromOrgChart";
import { useMediaQuery } from "react-responsive";
import { Popup } from "../Popup/Popup";
import { PopupDemo } from "../PopupDemo/PopupDemo";
import { useSelector, useDispatch } from "react-redux";
import { hidePopupAsync, hidePopupDemoAsync } from "../redux/actions";
import { HowItWorksLayout } from "../HowItWorksLayout/HowItWorksLayout";

export const Platfrom = () => {
  const DefaultPlatform = useMediaQuery({ query: "(min-width: 429px)" });
  const MobilePlatform = useMediaQuery({ query: "(max-width: 428px)" });

  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const isActive = useSelector((state) => state.isActive);
  const dispatch = useDispatch();
  const demo = useSelector((state) => state.demo);

  return (
    <>
      {MobilePlatform && (
        <>
          <Header />
          <HowItWorksLayout />
          <div className="video-mobile v-p-m">
                {lang === "en" ? (
                  <div className="video-en-v-mobile video-v-mobile-p">
                    <div className="iframe">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/BtpcP9H89a0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                  </div>
                ) : (
                  <div className="video-ru-v-mobile video-v-mobile-p">
                    <div className="iframe">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/nmKyJeEioow" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                  </div>
                )}
              </div>
          <div className="ergonza-platform-mobile">
            <div
              className={`opacity ${isActive !== "none" ? "overlay" : ""}`}
              onClick={() => dispatch(hidePopupAsync())}
            ></div>
            {isActive === "visible" || "animate" ? <Popup /> : null}

            <div
              className={`opacity ${demo !== "none" ? "overlay" : ""}`}
              onClick={() => dispatch(hidePopupDemoAsync())}
            ></div>
            {demo === "visible" || "animate" ? <PopupDemo /> : null}

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
              <div className="ergonza-platform-info-mobile">
                <div className="ergonza-platform-employers-mobile">
                  <div className="ergonza-platform-employers-img-mobile ergonza-platform-item-mobile"></div>
                  <div className="ergonza-platform-employers-header-mobile ergonza-platform-item-mobile">
                    {t("ergonza-platform-employers-header")}
                  </div>
                  <div className="ergonza-platform-employers-text-mobile ergonza-platform-item-mobile">
                    {t("ergonza-platform-employers-text")}
                  </div>
                </div>

                <div className="ergonza-platform-org-chart-mobile">
                  <div className="ergonza-platform-org-chart-img-mobile ergonza-platform-item-mobile"></div>
                  <div className="ergonza-platform-org-chart-header-mobile ergonza-platform-item-mobile">
                    {t("ergonza-platform-org-chart-header")}
                  </div>
                  <div className="ergonza-platform-org-chart-text-mobile ergonza-platform-item-mobile">
                    {t("ergonza-platform-org-chart-text")}
                  </div>
                </div>

                <div className="ergonza-platform-barometer-mobile">
                  <div className="ergonza-platform-barometer-img-mobile ergonza-platform-item-mobile"></div>
                  <div className="ergonza-platform-barometer-header-mobile ergonza-platform-item-mobile">
                    {t("ergonza-platform-barometer-header")}
                  </div>
                  <div className="ergonza-platform-barometer-text-mobile ergonza-platform-item-mobile">
                    {t("ergonza-platform-barometer-text")}
                  </div>
                </div>

                <div className="ergonza-platform-mbti-mobile">
                  <div className="ergonza-platform-mbti-img-mobile ergonza-platform-item-mobile"></div>
                  <div className="ergonza-platform-mbti-header-mobile ergonza-platform-item-mobile">
                    {t("ergonza-platform-mbti-header")}
                  </div>
                  <div className="ergonza-platform-mbti-text-mobile ergonza-platform-item-mobile">
                    {t("ergonza-platform-mbti-text")}
                  </div>
                </div>

                <div className="ergonza-platform-enneagram-mobile">
                  <div className="ergonza-platform-enneagram-img-mobile ergonza-platform-item-mobile"></div>
                  <div className="ergonza-platform-enneagram-header-mobile ergonza-platform-item-mobile">
                    {t("ergonza-platform-enneagram-header")}
                  </div>
                  <div className="ergonza-platform-enneagram-text-mobile ergonza-platform-item-mobile">
                    {t("ergonza-platform-enneagram-text")}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}

      {DefaultPlatform && (
        <>
          <Header />
          <HowItWorksLayout />
          <div className="video v-p">
                {lang === "en" ? (
                  <div className="video-en-v video-platform">
                    <div className="iframe">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/BtpcP9H89a0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                  </div>
                ) : (
                  <div className="video-ru-v video-platform">
                    <div className="iframe">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/nmKyJeEioow" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                  </div>
                )}
              </div>
          <div className="ergonza-platform">
            <div
              className={`opacity ${isActive !== "none" ? "overlay" : ""}`}
              onClick={() => dispatch(hidePopupAsync())}
            ></div>
            {isActive === "visible" || "animate" ? <Popup /> : null}

            <div
              className={`opacity ${demo !== "none" ? "overlay" : ""}`}
              onClick={() => dispatch(hidePopupDemoAsync())}
            ></div>
            {demo === "visible" || "animate" ? <PopupDemo /> : null}

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
        </>
      )}
    </>
  );
};
