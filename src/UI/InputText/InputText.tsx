import React from "react";
import classes from "../InputText/InputText.module.scss";

const InputText = (props: any) => {
  return (
    <div>
      <div className={classes.input}>
        <span className={classes.input__title}>Логин</span>
        <input type="text" className={classes.input__form} />
      </div>
    </div>
  );
};

export default InputText;
