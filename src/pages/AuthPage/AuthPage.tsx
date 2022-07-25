import React, { FC } from "react";
import Card from "../../UI/Card/Card";
import InputBlock from "../../UI/InputBlock/InputBlock";
import classes from "../AuthPage/AuthPage.module.scss";

const AuthPage: FC = (props: any) => {
  return (
    <div className={classes.background}>
      <div className={classes.layout}>
        <Card>
          <InputBlock />
        </Card>
      </div>
    </div>
  );
};

export default AuthPage;
