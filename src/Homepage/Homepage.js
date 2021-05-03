import React from "react";
import { Header } from '../header/Header';
import { IntoPage } from '../intro-page/IntroPage';
import { Footer } from '../footer/Footer';

export class HomePage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <IntoPage />
        <Footer />
      </>
    );
  }
}
