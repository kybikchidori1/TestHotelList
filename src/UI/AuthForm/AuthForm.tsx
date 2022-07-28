import React, { FC } from "react";
import Button from "../Button/Button";
import InputText from "../InputText/InputText";
import classes from "./AuthForm.module.scss";

const AuthForm: FC = (props: any) => {
  const submitHundler = (e: any) => {
    e.preventDefault();
    console.log(e);
  };

  const submitLink = (e: any) => {
    e.preventDefault();
  };

  return (
    <form className={classes.block} onSubmit={submitHundler}>
      <h1 className={classes.title}>Simple Hotel Check</h1>
      <InputText title={"Логин"} />
      <InputText title={"Пароль"} />
      <Button onSubmit={submitLink}>Войти</Button>
    </form>
  );
};

export default AuthForm;
