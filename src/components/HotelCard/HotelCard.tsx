import React, { FC } from "react";
import classes from "../HotelCard/HotelCard.module.scss";
import FavoriteIcon from "../../etc/img/icon/Favorite.svg";
import HouseIcon from "../../etc/img/icon/House.svg";

interface HotelCardProps {
  title: string;
  price: number;
  startDate: Date;
  amountDay: number;
}

const getMonth = (number: number) => {
  const months = [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь",
  ];
  return months[number];
};

const HotelCard: FC<HotelCardProps> = (props) => {
  const day = props.startDate.getDate();
  const month = props.startDate.getMonth();
  const stringMonth = getMonth(month);
  const year = props.startDate.getFullYear();

  const startDate = `${day} ${stringMonth} ${year}`;

  return (
    <div className={classes.card}>
      <div className={classes.block}>
        <img src={HouseIcon} alt="hotel-img" className={classes.hotel__img} />
        <div className={classes.main}>
          <h2 className={classes.title}>{props.title}</h2>
          <p className={classes.date}>
            {startDate} - {props.amountDay} день
          </p>
        </div>
      </div>

      <div className={classes.info}>
        <img
          src={FavoriteIcon}
          alt="favorite-icon"
          className={classes.favorite__img}
        />
        <p className={classes.price__block}>
          <span className={classes.count}>Price:</span>
          <span className={classes.price}>{props.price} ₽</span>
        </p>
      </div>
    </div>
  );
};

export default HotelCard;
