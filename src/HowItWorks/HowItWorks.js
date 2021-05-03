import React from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { HowItWorksLayout } from "../HowItWorksLayout/HowItWorksLayout";

export class HowItWorks extends React.Component {
  render() {
    return (
      <>
        <Header />
        <HowItWorksLayout />
        <Footer />
      </>
    );
  }
}
