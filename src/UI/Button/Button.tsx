import React from "react";
import classes from "../Button/Button.module.scss";

const Button = (props: any) => {
  return (
    <div>
      <button className={classes.button}>Войти</button>
    </div>
  );
};

export default Button;
