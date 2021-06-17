import React from "react";

import Header from "./containers/Header";
import Routes from "./Routes";
import "./styles.css";

const App = () => {
  return (
    <div className="primary-block">
      <Header />
      <Routes />
    </div>
  );
};

export default App;
