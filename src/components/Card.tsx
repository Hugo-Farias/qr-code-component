import img from "../assets/image-qr-code.png";
import cls from "./Card.module.css";

const Card = function () {
  return (
    <div className={cls.main}>
      <img className={cls.image} src={img} alt="qr code image" />
      <div>
        <h2>Improve your front-end skills by building projects</h2>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default Card;
