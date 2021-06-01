import "./PlatformHeader.scss";
import React from "react";
import { useMediaQuery } from "react-responsive";

export const PlatformHeader = () => {

  const MobilePlatformHeader = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 428 });
    return isMobile ? children : null;
  };

  const DefaultPlatformHeader = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 429 });
    return isNotMobile ? children : null;
  };

    return (
      <>
      <MobilePlatformHeader>
      <header className="platform-header-wrapper-mobile">
        <div className="platform-header-logo-icon-mobile"></div>

        <nav className="platform-header-nav-mobile">
          <div className="platform-header-nav-interview-mobile">
            <div className="platform-interview-icon-mobile platform-header-icon-mobile"></div>
            Опрос
          </div>

          <div className="platform-header-nav-staff-mobile">
            <div className="platform-staff-icon-mobile platform-header-icon-mobile"></div>
            Персонал
          </div>
          <div className="platform-header-nav-methodology-mobile">
            <div className="platform-methodology-icon-mobile platform-header-icon-mobile"></div>
            Методологии
          </div>
        </nav>
        <div className="platform-profile-mobile">
          <div className="platform-profile-name-mobile">Пастернак А.А.</div>
          <div className="platform-profile-photo-mobile"></div>
        </div>
      </header>
      </MobilePlatformHeader>

      <DefaultPlatformHeader>
      <header className="platform-header-wrapper">
        <div className="platform-header-logo-icon"></div>

        <nav className="platform-header-nav">
          <div className="platform-header-nav-interview">
            <div className="platform-interview-icon platform-header-icon"></div>
            Опрос
          </div>

          <div className="platform-header-nav-staff">
            <div className="platform-staff-icon platform-header-icon"></div>
            Персонал
          </div>
          <div className="platform-header-nav-methodology">
            <div className="platform-methodology-icon platform-header-icon"></div>
            Методологии
          </div>
        </nav>
        <div className="platform-profile">
          <div className="platform-profile-name">Пастернак А.А.</div>
          <div className="platform-profile-photo"></div>
        </div>
      </header>
      </DefaultPlatformHeader>
      </>
    );
}
