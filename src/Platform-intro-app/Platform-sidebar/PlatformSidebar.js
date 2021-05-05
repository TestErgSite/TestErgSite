import MediaQuery from "react-responsive";
import "./PlatformSidebar.scss";
import React from "react";
import {
  setStateToPromt 
} from "../../redux/actions.js";
import { connect } from "react-redux";
const autoBindReact = require("auto-bind/react");

class PlatformSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    autoBindReact(this);
  }

  showPropmt(e, currentElement) {
    this.props.setStateToPromt(currentElement, true)
  }

  leave(e, currentElement) {
    this.props.setStateToPromt(currentElement, false)
  }

  renderUser(position, bg='') {
    return (
      <>
      <MediaQuery minDeviceWidth={376}>
      <div className="user-snippet-wrapper">
        <div className="user-snippet-photo"></div>
        <div className="user-snippet-pos">{position}</div>
      </div>
      </MediaQuery>
      
      <MediaQuery maxDeviceWidth={375}>
      <div className={`user-snippet-wrapper-mobile ${bg}`}>
        <div className="user-snippet-photo-mobile"></div>
        <div className="user-snippet-pos-mobile">{position}</div>
      </div>
      </MediaQuery>
      </>
    );
  }

  render() {
    return (
      <>
       <MediaQuery maxDeviceWidth={375}>
        <div
          className={`sidebar-wrapper-mobile ${this.props.side ? 'removeHov' : ''}`}
        >
          <div className="sidebar-department-mobile">
            <div className="department-mobile">
              <div className="toggle-arrow-mobile"></div>
              <div className="dep-name-mobile">Компания</div>
            </div>
            {this.renderUser("CEO")}
          </div>
          <div className="sidebar-department-mobile sidebar-department-2">
            <div className="department-mobile">
              <div className="toggle-arrow-mobile"></div>
              <div className="dep-name-mobile">Отдел</div>
            </div>
            {this.renderUser("Сотрудник", 'bg')}
            {this.renderUser("Сотрудник")}
            {this.renderUser("Сотрудник")}
            {this.renderUser("Сотрудник")}
            {this.renderUser("Сотрудник")}
            {this.renderUser("Сотрудник")}
          </div>

          <div className="sidebar-department-mobile sidebar-department-2">
            <div className="department-mobile">
              <div className="toggle-arrow-mobile toggle-arrow-right"></div>
              <div className="dep-name-mobile">Отдел</div>
            </div>
          </div>
          <div className="sidebar-department-mobile sidebar-department-2">
            <div className="department-mobile">
              <div className="toggle-arrow-mobile toggle-arrow-right"></div>
              <div className="dep-name-mobile">Отдел</div>
            </div>
          </div>
          <div className="sidebar-department-mobile sidebar-department-2">
            <div className="department-mobile">
              <div className="toggle-arrow-mobile toggle-arrow-right"></div>
              <div className="dep-name-mobile">Отдел</div>
            </div>
          </div>
          <div className="sidebar-department-mobile sidebar-department-2">
            <div className="department-mobile">
              <div className="toggle-arrow-mobile toggle-arrow-right"></div>
              <div className="dep-name-mobile">Отдел</div>
            </div>
          </div>
        </div>
        </MediaQuery>

       <MediaQuery minDeviceWidth={376}>
        {this.props.side ? (
          <div className="promt-list-of-employers promt-block">
            <div className="promt-block-header">List of Employers</div>
            <div className="promt-block-text">
              Easy transfer of organizational staff
            </div>
          </div>
        ) : null}

        <div
          className={`sidebar-wrapper ${this.props.side ? 'removeHov' : ''}`}
          onMouseEnter={(e) => {
            this.showPropmt(e, 'side');
          }}
          onMouseLeave={(e) => {
            this.leave(e, 'side');
          }}
        >
          <div className="sidebar-department">
            <div className="department">
              <div className="toggle-arrow-mobile"></div>
              <div className="dep-name">Компания</div>
            </div>
            {this.renderUser("CEO")}
          </div>
          <div className="sidebar-department sidebar-department-2">
            <div className="department">
              <div className="toggle-arrow-mobile"></div>
              <div className="dep-name">Отдел</div>
            </div>
            {this.renderUser("Сотрудник")}
            {this.renderUser("Сотрудник")}
            {this.renderUser("Сотрудник")}
            {this.renderUser("Сотрудник")}
            {this.renderUser("Сотрудник")}
            {this.renderUser("Сотрудник")}
          </div>

          <div className="sidebar-department sidebar-department-2">
            <div className="department">
              <div className="toggle-arrow-mobile toggle-arrow-right"></div>
              <div className="dep-name">Отдел</div>
            </div>
          </div>
          <div className="sidebar-department sidebar-department-2">
            <div className="department">
              <div className="toggle-arrow-mobile toggle-arrow-right"></div>
              <div className="dep-name">Отдел</div>
            </div>
          </div>
          <div className="sidebar-department sidebar-department-2">
            <div className="department">
              <div className="toggle-arrow-mobile toggle-arrow-right"></div>
              <div className="dep-name">Отдел</div>
            </div>
          </div>
          <div className="sidebar-department sidebar-department-2">
            <div className="department">
              <div className="toggle-arrow-mobile toggle-arrow-right"></div>
              <div className="dep-name">Отдел</div>
            </div>
          </div>
        </div>
        </MediaQuery>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    promts: state.promts,
    side: state.promts.side,
  };
};

const mapDispatchToProps = {
  setStateToPromt
};

export default connect(mapStateToProps, mapDispatchToProps)(PlatformSidebar);