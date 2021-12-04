import React, { Component } from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <WelcomeComponent title="Ghana" />
    </div>
  );
};

class WelcomeComponent extends Component {
  render() {
    return <h1>Codetrain is awesome, react works!!!!</h1>;
  }
}

export default App;
