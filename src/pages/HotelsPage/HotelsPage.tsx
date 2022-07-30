import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HotelCard from "../../components/HotelCard/HotelCard";
import IconLogout from "../../etc/img/icon/Logout";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import InputDate from "../../UI/InputDate/InputDate";
import InputText from "../../UI/InputText/InputText";
import classes from "../HotelsPage/HotelsPage.module.scss";

interface HotelItemResponse {
  label: string;
  locationName: string;
  id: string;
  location: any;
  _score: number;
  fullName: string;
  locationId: number;
}

const HotelsPage: FC = (props: any) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<HotelItemResponse[]>([]);

  useEffect(() => {
    fetch(
      "http://engine.hotellook.com/api/v2/lookup.json?query=moscow&lang=ru&lookFor=both&limit=100"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.results.hotels);
          console.log(result.results.hotels);
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

      <Card>
        <div>
          {items.map((item: HotelItemResponse) => {
            return (
              <HotelCard
                key={item.id}
                title={item.label}
                price={123}
                amountDay={1}
                startDate={new Date()}
              />
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default HotelsPage;
