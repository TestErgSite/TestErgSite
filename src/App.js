import "./App.scss";
import React from "react";
import { HomePage } from "./Homepage/Homepage";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HowItWorks } from "./HowItWorks/HowItWorks";
import { CaseStudyPage } from "./CaseStudyPage/CaseStudyPage";
import Platform from "./Platfrom/Platfrom";
import { setLanguage, setMediaQuery } from "./redux/actions.js";
import { connect } from "react-redux";
import { MenuMobile } from "./MenuMobile/MenuMobile";

import "./i18n";

//убрать set lang из редакса
function App() {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <Router>
      <div className={`wrapper ${lang}`}>
        <Route path="/" exact component={HomePage} />
        <Route path="/about-app" exact component={HowItWorks} />
        <Route path="/study-page" exact component={CaseStudyPage} />
        <Route path="/platform" exact component={Platform} />
        <Route path="/menu" exact component={MenuMobile} />
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang,
  };
};

const mapDispatchToProps = {
  setLanguage,
  setMediaQuery,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
