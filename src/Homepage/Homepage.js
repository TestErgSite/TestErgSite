import React from "react";
import { Header } from '../header/Header';
import { IntroPage } from '../intro-page/IntroPage';
import { Footer } from '../footer/Footer';

export const HomePage = (props) => {
    return (
      <>
        <Header />
        <IntroPage />
        <Footer />
      </>
    );
}
