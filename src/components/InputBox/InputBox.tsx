import React, { FC, Fragment } from "react";
import classes from "./InputBox.module.scss";

const InputBox: FC = (props: any) => {
  return (
    <Fragment>
      <div className={classes.title}>Simple Hotel Check</div>
      <div className={classes.input}>
        <span className={classes.input__title}>Логин</span>
        <input type="text" className={classes.input__form} />
      </div>
      <div className={classes.input}>
        <span className={classes.input__title}>Пароль</span>
        <input type="text" className={classes.input__form} />
      </div>
      <button className={classes.button}>Войти</button>
    </Fragment>
  );
};

export default InputBox;
