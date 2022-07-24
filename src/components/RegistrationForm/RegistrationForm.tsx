import React, { FC, Fragment } from "react";
import InputBox from "../InputBox/InputBox";
import classes from "./RegistrationForm.module.scss";

const RegistrationForm: FC = (props: any) => {
  return (
    <Fragment>
      <div className={classes.background}>
        <div className={classes.blur}>
          <div className={classes.form}>
            <InputBox />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RegistrationForm;
