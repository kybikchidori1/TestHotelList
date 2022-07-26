import React, { FC } from "react";
import Logout from "../../etc/img/icon/Logout";
import classes from "../HotelsPage/HotelsPage.module.scss";

const HotelsPage: FC = (props: any) => {
  return (
    <div className={classes.background}>
      <div className={classes.header}>
        <h1 className={classes.title}>Simple Hotel Check</h1>
        <div className={classes.item}>
          <span className={classes.item__name}>Выйти</span>
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default HotelsPage;
