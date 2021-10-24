import React from "react";
import "./Snippet.scss";

export class UserSnippet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {this.props.user ? (
          <div
            className={`user-snippet-barometer-wrapper`}
          >
            <div className="wrap-user" id={`${this.props.user.id}`}></div>
            <div
              className="user-snippet-barometer-photo"
              style={{ backgroundImage: `url(${this.props.user.avatar}` }}
            ></div>
            <div className="user-snippet-barometer-name">
              <div className="user-snippet-barometer-firstName">
                {this.props.user.first_name}
              </div>
              <div className="user-snippet-barometer-lastName">
                {this.props.user.last_name}
              </div>
            </div>
            <div className="user-snippet-barometer-position">
              {this.props.user.position}
            </div>
          </div>
        ) : null}
      </>
    );
  }
}
