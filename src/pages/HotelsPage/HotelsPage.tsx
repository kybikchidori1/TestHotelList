import React, { FC } from "react";
import { Link } from "react-router-dom";
import Logout from "../../etc/img/icon/Logout";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import DatePickerBlock from "../../UI/DatePickerBlock/DatePickerBlock";
import InputText from "../../UI/InputText/InputText";
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

      <Card>
        <InputText title={"Локация"} />
        <DatePickerBlock title={"Дата заселения"} />
        <InputText title={"Количество дней"} />
        <Button>Найти</Button>
      </Card>
    </div>
  );
};

export default HotelsPage;
