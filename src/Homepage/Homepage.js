import React from "react";
import { Header } from '../header/Header';
import { IntroPage } from '../intro-page/IntroPage';
import { Footer } from '../footer/Footer';

export const HomePage = () => {
    return (
      <>
        <Header />
        <IntroPage />
        <Footer />
      </>
    );
}
