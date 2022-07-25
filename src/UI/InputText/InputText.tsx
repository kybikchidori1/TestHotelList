import React, { FC } from "react";
import classes from "../InputText/InputText.module.scss";

interface InputTextProps {
  placeholder?: string;
  title: string;
}

const InputText: FC<InputTextProps> = (props) => {
  return (
    <div className={classes.input}>
      <span className={classes.input__title}>{props.title}</span>
      <input
        type="text"
        className={classes.input__form}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputText;
