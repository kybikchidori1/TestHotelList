import React, { FC } from "react";
import classes from "../src/App.module.scss";
import AuthPage from "./pages/AuthPage/AuthPage";

const App: FC = () => {
  return (
    <div className={classes.background}>
      <AuthPage />
    </div>
  );
};

export default App;
