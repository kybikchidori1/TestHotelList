import React, { FC } from "react";
import classes from "../src/App.module.scss";
import AuthPage from "./pages/AuthPage/AuthPage";
import HotelsPage from "./pages/HotelsPage/HotelsPage";

const App: FC = () => {
  return (
    <div className={classes.background}>
      {/* <AuthPage /> */}
      <HotelsPage />
    </div>
  );
};

export default App;
