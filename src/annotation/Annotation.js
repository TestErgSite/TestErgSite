import React from "react";
import "./Annotation.scss";
import { useMediaQuery } from "react-responsive";

export const Annotation = (props) => {
  const DefaultAnnotation = useMediaQuery({ query: "(min-width: 429px)" });
  const MobileAnnotation = useMediaQuery({ query: "(max-width: 428px)" });
  return (
    <>
      {DefaultAnnotation && (
        <div className="annatation-wrapper">
          <div className={`arrow ${props.direction === "right" ? "rotate" : "" }`}></div>

          <div className="annotation-block">
            <div className={`annotation-text ${props.noWeight ? 'noWeight' : ''}`}>{props.text}</div>
          </div>
        </div>
      )}
      {MobileAnnotation && (
        <div className="annatation-wrapper-mobile">
           <div className={`arrow ${props.noArrow ? 'no-arrow' : ''}`}></div>

          <div className="annotation-block-mobile">
            <div className="annotation-text-mobile">{props.text}</div>
          </div>
        </div>
      )}
    </>
  );
};
