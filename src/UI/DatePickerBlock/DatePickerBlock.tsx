import React, { FC } from "react";
import classes from "./DatePickerBlock.module.scss";

interface DatePickerBlockProps {
  placeholder?: string;
  title: string;
}

const DatePickerBlock: FC<DatePickerBlockProps> = (props: any) => {
  return (
    <div className={classes.input}>
      <span className={classes.input__title}>{props.title}</span>
      <input
        type="date"
        className={classes.input__form}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default DatePickerBlock;
