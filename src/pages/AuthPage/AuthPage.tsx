import React, { FC } from "react";
import Card from "../../UI/Card/Card";
import AuthForm from "../../UI/AuthForm/AuthForm";
import classes from "../AuthPage/AuthPage.module.scss";

const AuthPage: FC = (props: any) => {
  return (
    <div className={classes.background}>
      <div className={classes.layout}>
        <Card>
          <AuthForm />
        </Card>
      </div>
    </div>
  );
};

export default AuthPage;
