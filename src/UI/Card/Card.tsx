import React, { FC } from "react";
import InputBlock from "../InputBlock/InputBlock";
import classes from "./Card.module.scss";

const Card: FC = (props: any) => {
  return (
    <div className={classes.card}>
      <InputBlock />
    </div>
  );
};

export default Card;
