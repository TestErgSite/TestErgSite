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

  renderUser(position) {
    return (
      <div className="user-snippet-wrapper">
        <div className="user-snippet-photo"></div>
        <div className="user-snippet-pos">{position}</div>
      </div>
    );
  }

  render() {
    return (
      <>
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
              <div className="toggle-arrow"></div>
              <div className="dep-name">Компания</div>
            </div>
            {this.renderUser("CEO")}
          </div>
          <div className="sidebar-department sidebar-department-2">
            <div className="department">
              <div className="toggle-arrow"></div>
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
              <div className="toggle-arrow toggle-arrow-right"></div>
              <div className="dep-name">Отдел</div>
            </div>
          </div>
          <div className="sidebar-department sidebar-department-2">
            <div className="department">
              <div className="toggle-arrow toggle-arrow-right"></div>
              <div className="dep-name">Отдел</div>
            </div>
          </div>
          <div className="sidebar-department sidebar-department-2">
            <div className="department">
              <div className="toggle-arrow toggle-arrow-right"></div>
              <div className="dep-name">Отдел</div>
            </div>
          </div>
          <div className="sidebar-department sidebar-department-2">
            <div className="department">
              <div className="toggle-arrow toggle-arrow-right"></div>
              <div className="dep-name">Отдел</div>
            </div>
          </div>
        </div>
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