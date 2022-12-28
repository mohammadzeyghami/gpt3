import React from "react";
import {
  Header,
  Brand,
  WhatGPT3,
  Features,
  Possibility,
  CTA,
  Blog,
  Footer,
} from "./sections";
import { Navbar } from "./components";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
