import React from "react";
import Card from "./UI/Card/Card";
import classes from "../src/App.module.scss";

function App() {
  return (
    <div className={classes.background}>
      <div>
        <Card />
      </div>
    </div>
  );
}

export default App;
