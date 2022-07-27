import React, { FC } from "react";
import { Link } from "react-router-dom";
import Logout from "../../etc/img/icon/Logout";
import classes from "../HotelsPage/HotelsPage.module.scss";

const HotelsPage: FC = (props: any) => {
  return (
    <div className={classes.background}>
      <header className={classes.header}>
        <h1 className={classes.title}>Simple Hotel Check</h1>
        <Link to="/">
          <div className={classes.item}>
            <span className={classes.item__name}>Выйти</span>
            <Logout />
          </div>
        </Link>
      </header>
    </div>
  );
};

export default HotelsPage;
