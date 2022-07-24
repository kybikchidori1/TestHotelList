import React, { FC, Fragment } from "react";
import classes from "./RegistrationForm.module.scss";

const RegistrationForm: FC = (props: any) => {
  return (
    <Fragment>
      <div className={classes.background}>
        <div className={classes.blur}>
          <div className={classes.form}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default RegistrationForm;
