import "./App.css";
import Card from "./components/Card";

const qrcodeContent = {
  img: "/src/assets/image-qr-code.png",
  title: "Improve your front-end skills by building projects",
  description:
    "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",
};

function App() {
  return (
    <>
      <Card
        img={qrcodeContent.img}
        title={qrcodeContent.title}
        description={qrcodeContent.description}
      />
    </>
  );
}

export default App;
