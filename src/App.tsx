import React from "react";
import Card from "./UI/Card/Card";
import classes from "../src/App.module.scss";
import InputBlock from "./UI/InputBlock/InputBlock";

function App() {
  return (
    <div className={classes.background}>
      <div>
        <Card>
          <InputBlock />
        </Card>
      </div>
    </div>
  );
}

export default App;
