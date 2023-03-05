import React from "react";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Forms 1:</h1>
        <div>
          <InteractiveWelcome />
          <Welcome />
        </div>
        <hr />
        <h1>Forms 2</h1>
      </div>
    );
  }
}
