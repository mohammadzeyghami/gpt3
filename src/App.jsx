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
    <div className="app">
      <Navbar />
      <Header />
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
