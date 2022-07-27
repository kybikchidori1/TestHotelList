import React, { FC, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import HotelsPage from "./pages/HotelsPage/HotelsPage";

const App: FC = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
      </Routes>
    </Fragment>
  );
};

export default App;
