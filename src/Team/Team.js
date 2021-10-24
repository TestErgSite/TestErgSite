import "./Team.scss";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
import { useMediaQuery } from "react-responsive";
import { useSelector, useDispatch } from "react-redux";
import { hidePopupAsync, hidePopupDemoAsync } from "../redux/actions";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { PopupDemo } from "../PopupDemo/PopupDemo";
import { Popup } from "../Popup/Popup";
import { UserSnippet } from "../Snippet/Snippet";
import Sasha from './images/Sasha.png';
import Anya from  './images/Anya.png';
import Dima from './images/Dima.png';
import Nikita from './images/Nikita.png';
import Igor from './images/Igor.png';
import { Annotation } from "../annotation/Annotation";

export const Team = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const DefaultTeam = useMediaQuery({ query: "(min-width: 429px)" });
  const MobileTeam = useMediaQuery({ query: "(max-width: 428px)" });

  const isActive = useSelector((state) => state.isActive);
  const dispatch = useDispatch();

  const demo = useSelector((state) => state.demo);

  const teamRu = [
    { id: 0, first_name: "Дмитрий", last_name: "Шихов", position: "Founder & CEO", avatar: Dima },
    { id: 1, irst_name: "Игорь", last_name: "Булах", position: " Head of Product", avatar: Igor },
    { id: 2, first_name: "Александра", last_name: "Островская", position: "Head of Frontend Dvt.", avatar: Sasha },
    { id: 3, irst_name: "Никита", last_name: "Деревянко", position: "Head of Backend Dvt.", avatar: Nikita },
    { id: 4, first_name: "Анна", last_name: "Карпенко", position: "Head of Methodology", avatar: Anya },
  ];

  const teamEn = [
    { id: 0, first_name: "Dmitry", last_name: "Shikhov", position: "Founder & CEO", avatar: Dima },
    { id: 1, first_name: "Igor", last_name: "Bulah", position: " Head of Product", avatar: Igor },
    { id: 2, first_name: "Aleksandra", last_name: "Ostrovskaia", position: "Head of Frontend Dvt.", avatar: Sasha },
    { id: 3, first_name: "Nikita", last_name: "Derevianko", position: "Head of Backend Dvt.", avatar: Nikita },
    { id: 4, first_name: "Anna", last_name: "Karpenko", position: "Head of Methodology", avatar: Anya },
  ];

  const team = i18n.language === "en" ? teamRu : teamEn;

  const getTeam = () => {
    const teamArrray = [];
    team.forEach(t => {
      teamArrray.push(<UserSnippet key={t.id} user={t}/>)
    })
    return teamArrray;
  };

  const [selected, setSelected] = useState(0);

  const getDescription = (e) => {
    const id = e.target.id;
    setSelected({
      0: false,
      1: false,
      2: false,
      3: false, 
      4: false,
      ...{
        [id]: true,
      },
    });
  }

  return (
    <>
      <Header />
      {MobileTeam && (
        <div className="methodology-mobile">
          <div
            className={`opacity ${isActive !== "none" ? "overlay" : ""}`}
            onClick={() => dispatch(hidePopupAsync())}
          ></div>
          {isActive === "visible" || "animate" ? <Popup /> : null}

          <div
            className={`opacity ${demo !== "none" ? "overlay" : ""}`}
            onClick={() => dispatch(hidePopupDemoAsync())}
          ></div>
          {demo === "visible" || "animate" ? <PopupDemo /> : null}
          <div className="team-header">{t("team-header")}</div>
        </div>
      )}

      {DefaultTeam && (
        <div className="team">
          <div
            className={`opacity ${isActive !== "none" ? "overlay" : ""}`}
            onClick={() => dispatch(hidePopupAsync())}
          ></div>
          {isActive === "visible" || "animate" ? <Popup /> : null}

          <div
            className={`opacity ${demo !== "none" ? "overlay" : ""}`}
            onClick={() => dispatch(hidePopupDemoAsync())}
          ></div>
          {demo === "visible" || "animate" ? <PopupDemo /> : null}
          <div className="team-wrapper">
            <div className="team-header">{t("team-header")}</div>
            <div className="platform-wrapper">
              <div className="team-list" onClick={(e) => getDescription(e)}>{getTeam()}</div>
              <Annotation />
              <div className="team-platform-footer"></div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};
