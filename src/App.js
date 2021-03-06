import "./App.scss";
import React from "react";
import { HomePage } from "./Homepage/Homepage";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CaseStudyPage } from "./CaseStudyPage/CaseStudyPage";
import { Platfrom } from "./Platfrom/Platfrom";
import { MenuMobile } from "./MenuMobile/MenuMobile";
import { Team } from "./Team/Team";
import { WhatIsErgonza } from "./WhatIsErgonza/WhatIsErgonza";
import { Methodology } from "./Methodology/Methodology";

import "./i18n";

export const App = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <Router>
      <div className={`wrapper ${lang}`}>
        <Route path="/" exact component={HomePage} />
        <Route path="/study-page" exact component={CaseStudyPage} />
        <Route path="/platform" exact component={Platfrom} />
        <Route path="/menu" exact component={MenuMobile} />
        <Route path="/methodology" exact component={Methodology} />
        <Route path="/what-is-ergonza" exact component={WhatIsErgonza} />
        <Route path="/team" exact component={Team} />
      </div>
    </Router>
  );
}

