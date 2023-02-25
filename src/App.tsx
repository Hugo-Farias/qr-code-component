import "./App.css";
import img from "./assets/image-qr-code.png";
import Card from "./components/Card";

const qrcodeContent = {
  img: img,
  title: "Improve your front-end skills by building projects",
  description:
    "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",
};

function App() {
  return (
    <>
      <div>
        <Card
          img={qrcodeContent.img}
          title={qrcodeContent.title}
          description={qrcodeContent.description}
        />
      </div>
    </>
  );
}

export default App;
