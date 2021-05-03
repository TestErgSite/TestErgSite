import "./PlatformHeader.scss";
import React from "react";

export class PlatformHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
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
    );
  }
}
