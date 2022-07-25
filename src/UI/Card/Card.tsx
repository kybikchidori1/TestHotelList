import React, { FC } from "react";

import classes from "./Card.module.scss";

interface CardProps {
  children?: any;
}

const Card: FC<CardProps> = (props: any) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
