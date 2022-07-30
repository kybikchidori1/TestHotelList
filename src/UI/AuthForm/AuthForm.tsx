import React, { FC } from "react";
import Button from "../Button/Button";
import InputText from "../InputText/InputText";
import classes from "./AuthForm.module.scss";
import { useNavigate } from "react-router-dom";

const AuthForm: FC = (props: any) => {
  let navigate = useNavigate();

  const submitHundler = (e: any) => {
    e.preventDefault(); // блокирует onSubmit стандартное поведение
    navigate("/hotels");
  };

  return (
    <form className={classes.block} onSubmit={submitHundler}>
      <h1 className={classes.title}>Simple Hotel Check</h1>
      <InputText title={"Логин"} />
      <InputText title={"Пароль"} />
      <Button>Войти</Button>
    </form>
  );
};

export default AuthForm;
