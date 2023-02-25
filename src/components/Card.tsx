import React from "react";
import cls from "./Card.module.css";

interface props {
  img: string;
  title: string;
  description: string;
}

const Card: React.FC<props> = function ({ img, title, description }) {
  return (
    <div className={cls.main}>
      <img className={cls.image} src={img} alt="qr code image" />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
