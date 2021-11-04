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
import { Annotation } from "../annotation/Annotation";
import { teamRu, teamEn } from "../Data/TeamData";
import { Barometer } from '../barometer/Barometer';

export const Team = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const DefaultTeam = useMediaQuery({ query: "(min-width: 429px)" });
  const MobileTeam = useMediaQuery({ query: "(max-width: 428px)" });

  const isActive = useSelector((state) => state.isActive);
  const dispatch = useDispatch();

  const demo = useSelector((state) => state.demo);

  const team = i18n.language === "en" ? teamEn : teamRu;

  const getTeam = () => {
    const teamArrray = [];
    team.forEach((t) => {
      teamArrray.push(<UserSnippet key={t.id} user={t} />);
    });
    return teamArrray;
  };
  const [selected, setSelected] = useState({
    0: true,
    1: false,
    2: false,
    3: false,
    4: false,
  });

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
  };

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

          <div className="team-wrapper team-wrapper-mobile">
            <div className="team-header">{t("team-header")}</div>
            <div className="platform-wrapper  platform-wrapper-mobile">
              <div className="team-list" onClick={(e) => getDescription(e)}>
                {selected[0] && (
                  <>
                  <UserSnippet user={team[0]} />
                  <Annotation
                      id={team[0].id}
                      direction="right"
                      noWeight
                      divider
                      header={{id: team[0].ennea.id, procent: team[0].ennea.procent}}
                      text={team[0].ennea.personDesciption}
                      text2={team[0].ennea.professionalSkillsDescription}
                      width={292}
                    />
                    </>
                )}
                {selected[1] && (
                  <UserSnippet user={team[1]} />
                )}
                {selected[2] && (
                  <UserSnippet user={team[2]} />
                )}
                {selected[3] && (
                  <UserSnippet user={team[3]} />
                )}
                {selected[4] && (
                  <UserSnippet user={team[0]} />
                )}
              </div>
              <div className="team-platform-footer">
                <Barometer />
                <div className="footer-text-wrapper">
                  <div className="barometer-header">{t("barometer-header")}</div>
                  <div className="barometer-procent">92%</div>
                  <div className="barometer-experts">{t("barometer-experts")}</div>
                </div>
              </div>
            </div>
          </div>

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
              <div className="team-list" onClick={(e) => getDescription(e)}>
                {getTeam()}
              </div>
              {team.map((person, id) => {
                if (selected[id]) {
                  const direction = id >= 3 ? "right" : "left";
                  return (
                    <Annotation
                      id={id}
                      direction={direction}
                      noWeight
                      divider
                      header={{id: person.ennea.id, procent: person.ennea.procent}}
                      text={person.ennea.personDesciption}
                      text2={person.ennea.professionalSkillsDescription}
                      width={1023}
                      key={person.first_name}
                    />
                  );
                } else return null;
              })}
              <div className="team-platform-footer">
                <Barometer />
                <div className="footer-text-wrapper">
                  <div className="barometer-header">{t("barometer-header")}</div>
                  <div className="barometer-procent">92%</div>
                  <div className="barometer-experts">{t("barometer-experts")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};
