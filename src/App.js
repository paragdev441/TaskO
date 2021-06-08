import React from "react";

import Header from "./containers/Header";
import Routes from "./Routes";
import Footer from "./containers/Footer";
import "./styles.css";

const App = () => {
  return (
    <div className="primary-block">
      <Header />
      <Routes />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
