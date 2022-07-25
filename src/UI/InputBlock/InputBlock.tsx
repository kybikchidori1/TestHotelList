import React, { FC, Fragment } from "react";
import InputText from "../InputText/InputText";
import classes from "./InputBlock.module.scss";

const InputBlock: FC = (props: any) => {
  return (
    <Fragment>
      <div className={classes.block}>
        <div className={classes.title}>Simple Hotel Check</div>
        <InputText />
        <InputText />
      </div>
    </Fragment>
  );
};

export default InputBlock;
