import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IconLogout from "../../etc/img/icon/Logout";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import InputDate from "../../UI/InputDate/InputDate";
import InputText from "../../UI/InputText/InputText";
import classes from "../HotelsPage/HotelsPage.module.scss";

const HotelsPage: FC = (props: any) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      "http://engine.hotellook.com/api/v2/lookup.json?query=moscow&lang=ru&lookFor=both&limit=100"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []); // [] - единожды при первом заходе на странице отработает код из useEffect
  // [var1,var2,var3] - при изменении любой из переменных отработает код из useEffect

  return (
    <div className={classes.background}>
      <header className={classes.header}>
        <h1 className={classes.title}>Simple Hotel Check</h1>
        <Link to="/">
          <div className={classes.item}>
            <span className={classes.item__name}>Выйти</span>
            <IconLogout />
          </div>
        </Link>
      </header>

      <Card>
        <InputText title={"Локация"} />
        <InputDate title={"Дата заселения"} />
        <InputText title={"Количество дней"} />
        <Button>Найти</Button>
      </Card>
    </div>
  );
};

export default HotelsPage;
