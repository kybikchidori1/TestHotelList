import React, { FC } from "react";
import classes from "../Button/Button.module.scss";

interface ButtonProps {
  children?: any;
}

const Button: FC<ButtonProps> = (props: any) => {
  return <button className={classes.button}>{props.children}</button>;
};

export default Button;
