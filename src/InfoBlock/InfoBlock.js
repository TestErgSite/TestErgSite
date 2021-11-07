import React from "react";
import "./InfoBlock.scss";
import { useMediaQuery } from "react-responsive";

export const InfoBlock = (props) => {
  const DefaultInfoBlock = useMediaQuery({ query: "(min-width: 429px)" });
  const MobileInfoBlock = useMediaQuery({ query: "(max-width: 428px)" });

  return (
    <>
      {DefaultInfoBlock && (
        <div className="info-block-wrapper">
          <div className="info-block-header">
            {props.header ? props.header : null}
          </div>
          <div className="info-block-columns">
            <div className="info-block-col">
              <img
                src={props.img1 ? props.img1 : ""}
                alt="eye"
                className="info-block-col-img"
              ></img>
              <div className="info-block-col-text">
                {props.col1 ? props.col1 : null}
              </div>
            </div>
            <div className="info-block-col">
              <img
                src={props.img2 ? props.img2 : ""}
                alt="diagram"
                className="info-block-col-img"
              ></img>
              <div className="info-block-col-text">
                {props.col2 ? props.col2 : null}
              </div>
            </div>
            <div className="info-block-col">
              <img
                src={props.img3 ? props.img3 : ""}
                alt="notes"
                className="info-block-col-img"
              ></img>
              <div className="info-block-col-text">
                {props.col3 ? props.col3 : null}
              </div>
            </div>
          </div>
        </div>
      )}
      {MobileInfoBlock && (
        <div className="info-block-wrapper-mobile">
          <div className="info-block-header-mobile">
            {props.header ? props.header : null}
          </div>
          <div className="info-block-columns-molile">
            <div className="info-block-col-mobile">
              <img
                src={props.img1 ? props.img1 : ""}
                className="info-block-col-img"
                alt="eye"
                width="72px"
                height="72px"
              ></img>
              <div className="info-block-col-text-mobile">
                {props.col1 ? props.col1 : null}
              </div>
            </div>
            <div className="info-block-col-mobile">
              <img
                src={props.img2 ? props.img2 : ""}
                className="info-block-col-img"
                alt="diagram"
                width="72px"
                height="72px"
              ></img>
              <div className="info-block-col-text-mobile">
                {props.col2 ? props.col2 : null}
              </div>
            </div>
            <div className="info-block-col-mobile">
              <img
                src={props.img3 ? props.img3 : ""}
                alt="notes"
                className="info-block-col-img"
                width="72px"
                height="72px"
              ></img>
              <div className="info-block-col-text-mobile">
                {props.col3 ? props.col3 : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
