import React from "react";
import "./Annotation.scss";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";
import "../i18n";

export const Annotation = (props) => {
  const DefaultAnnotation = useMediaQuery({ query: "(min-width: 429px)" });
  const MobileAnnotation = useMediaQuery({ query: "(max-width: 428px)" });

  const { t } = useTranslation();

  let translate;
  if(props.id === 0) {
    translate = 0;
  } else if (props.id === 1) {
    translate = 200;
  } else if (props.id === 2) {
    translate = 400;
  } else if (props.id === 3) {
    translate = 680;
  } else {
    translate = 880;
  }

  let matrix;
  if(props.direction === 'left') {
    matrix = '-1, 0, 0, 1, 0, 0';
  } else {
    matrix = '1, 0, 0, 1, 0, 0';
  }

  const styles = {
    transform: `translate(${translate}px, 0) matrix(${matrix})`
  };
  console.log(props.divider === false, props.divider, 'divider')

  const annotationWithoutDivider = () => (
    <>
      {DefaultAnnotation && (
        <div className="annatation-wrapper">
          <div
            className={`arrow ${props.direction === "right" ? "rotate" : ""}`}
          ></div>

          <div className="annotation-block">
            <div
              className={`annotation-text ${props.noWeight ? "noWeight" : ""}`}
            >
              {props.text}
            </div>
          </div>
        </div>
      )}
      {MobileAnnotation && (
        <div className="annatation-wrapper-mobile">
          <div className={`arrow ${props.noArrow ? "no-arrow" : ""}`}></div>

          <div className="annotation-block-mobile">
            <div className="annotation-text-mobile">{props.text}</div>
          </div>
        </div>
      )}
    </>
  );

  const annotationWithDivider = () => (
    <>
      {DefaultAnnotation &&  (
        <div className="annatation-wrapper" style={{width: props.width}}>
          <div
            className={`arrow ${props.direction === "right" ? "rotate" : ""}`}
            style={styles}
          ></div>

          <div className="annotation-block annotation-block-WithDivider">
            <div
              className={`annotation-text WithDivider ${props.noWeight ? "noWeight" : ""}`}
            >
            <div className="annotation-header"><span className="annotation-id">{props.header.id}</span><span>{props.header.procent}</span></div>
              {props.text}
            </div>
            <div
              className={`annotation-text-2  WithDivider ${props.noWeight ? "noWeight" : ""}`}
            >
            <div className="annotation-header">{t("profSkills")}</div>
              {props.text2}
            </div>
          </div>
        </div>
      )}
      {MobileAnnotation &&  (
        <div className="annatation-wrapper-mobile">
            <div className="annotation-header">{props.header}</div>
          <div className={`arrow ${props.noArrow ? "no-arrow" : ""}`}></div>

          <div className="annotation-block-mobile">
            <div className="annotation-text-mobile">{props.text}</div>
          </div>
          <div className="annotation-header">{t("profSkills")}</div>
          <div
              className={`annotation-text-2  WithDivider ${props.noWeight ? "noWeight" : ""}`}
            >
              {props.text2}
            </div>
        </div>
      )}
    </>
      );
  return !props.divider ? annotationWithoutDivider() : annotationWithDivider();
};
