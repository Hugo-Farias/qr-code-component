import img from "../assets/image-qr-code.png";
import cls from "./Card.module.css";

const Card = function () {
  return (
    <div className={cls.main}>
      <img className={cls.image} src={img} alt="qr code image" />
    </div>
  );
};

export default Card;
