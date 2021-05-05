import MediaQuery from "react-responsive";
import React from "react";
import "./PlatfromOrgChart.scss";
import { setStateToPromt } from "../../redux/actions.js";
import { connect } from "react-redux";
const autoBindReact = require("auto-bind/react");

class PlatfromOrgChart extends React.Component {
  constructor(props) {
    super(props);
    autoBindReact(this);
    this.state = {};
  }

  showPropmt(e, currentElement) {
    this.props.setStateToPromt(currentElement, true);
  }

  leave(currentElement) {
    this.props.setStateToPromt(currentElement, false);
  }

  render() {
    return (
      <>
        <MediaQuery maxDeviceWidth={375}>
          <div className="org-chart-mobile"></div>

          <div className="charts-mobile">
            <div className="barometer-mobile"></div>

            <div className="enn-mobile"></div>
            <div className="mbti-mobile"></div>
          </div>
        </MediaQuery>

        <MediaQuery minDeviceWidth={376}>
          <div
            className="org-chart"
            onMouseOver={(e) => {
              this.showPropmt(e, "tree");
            }}
            onMouseLeave={(e) => {
              this.leave(e, "tree");
            }}
          ></div>

          {this.props.tree ? (
            <div className="promt-tree promt-block">
              <div className="promt-block-tree-header">Adaptive Org-Chart</div>
              <div className="promt-block-text">Easy-to-use org-chart</div>
            </div>
          ) : null}

          {this.props.barometer ? (
            <div className="promt-barometer promt-charts">
              <div className="promt-block-charts-header">Barometer</div>
              <div className="promt-charts-text">Сorporate climate</div>
            </div>
          ) : null}

          {this.props.enn ? (
            <div className="promt-enn promt-charts">
              <div className="promt-block-charts-header">Ennagram</div>
              <div className="promt-charts-text">Principals</div>
            </div>
          ) : null}

          {this.props.mbti ? (
            <div className="promt-mbti promt-charts">
              <div className="promt-block-charts-header">MBTI</div>
              <div className="promt-charts-text">Principals</div>
            </div>
          ) : null}

          <div className="charts">
            <div
              className="barometer"
              onMouseOver={(e) => {
                this.showPropmt(e, "barometer");
              }}
              onMouseLeave={(e) => {
                this.leave(e, "barometer");
              }}
            ></div>

            <div
              className="enn"
              onMouseOver={(e) => {
                this.showPropmt(e, "enn");
              }}
              onMouseLeave={(e) => {
                this.leave(e, "enn");
              }}
            ></div>
            <div
              className="mbti"
              onMouseOver={(e) => {
                this.showPropmt(e, "mbti");
              }}
              onMouseLeave={(e) => {
                this.leave(e, "mbti");
              }}
            ></div>
          </div>
        </MediaQuery>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    promts: state.promts,
    mbti: state.promts.mbti,
    enn: state.promts.enn,
    barometer: state.promts.barometer,
    tree: state.promts.tree,
  };
};

const mapDispatchToProps = {
  setStateToPromt,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlatfromOrgChart);
