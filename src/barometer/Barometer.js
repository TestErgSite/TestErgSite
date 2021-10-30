import React from "react";
import "./Barometer.scss";

export class Barometer extends React.Component {

  renderBarometer() {
    let indicators = [];
    const startAngle = 0;
    const endAngle = 180;
    const indicatorsNumber = 41;
    const step = (endAngle - startAngle) / indicatorsNumber;
    let angle = startAngle; //угол наклона
    let color = "red";
    let color2 = "red";
    let procentNumber = 92;
    let oneDeg = endAngle / 100;
    let procentNumberInDeg = oneDeg * procentNumber; //число в градусах
    let highlighted = "highlighted";
    let opacity = 1;

    for (let i = 0; i < indicatorsNumber; i++) {
      if (procentNumber < 33) {
        color = "red";
      } else if (procentNumber >= 33 && procentNumber <= 66) {
        color = "yellow";
      } else {
        color = "green";
      }

      if (i <= 13) {
        color2 = "red";
      } else if (i > 13 && i <= 27) {
        color2 = "yellow";
      } else {
        color2 = "green";
      }

      if (procentNumberInDeg >= angle) {
        indicators.push(
          <div
            key={i}
            className={`barometer-indicator ${color} ${highlighted}`}
            style={{ transform: `rotate(${angle}deg)`, opacity: `${opacity}` }}
          ></div>
        );
        angle += step;
      } else {
        indicators.push(
          <div
            key={i}
            className={`barometer-indicator ${color2}`}
            style={{ transform: `rotate(${angle}deg)` }}
          ></div>
        );
        angle += step;
      }
    }
    return (
      <div
        className="barometer-wrapper"
      >
        {indicators}
        <div
          className="barometer-circle"
        ></div>
        <div className="start-procent">0%</div>
        <div className="end-procent">100%</div>
        <div
          className="barometer-arrow"
          style={{ transform: `rotate(${procentNumberInDeg}deg)` }}
        ></div>
        <div className="barometer-arrow-procent">
          {procentNumber}%
        </div>
      </div>
    );
  }

  render() {
    return this.renderBarometer();
  }
}