import React, { FC } from "react";
import classes from "./InputDate.module.scss";

interface InputDateProps {
  placeholder?: string;
  title: string;
}

const InputDate: FC<InputDateProps> = (props: any) => {
  return (
    <div className={classes.wrapper}>
      <span className={classes.input__title}>{props.title}</span>
      <input
        type="date"
        className={classes.input}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputDate;
