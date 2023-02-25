import "./App.css";
import img from "./assets/image-qr-code.png";
import Card from "./components/Card";

function App() {
  const title = "Improve your front-end skills by building projects";
  const description =
    "Scan the QR code to visit Frontend Mentor and take your coding skills\n" +
    "          to the next level";

  return <Card img={img} title={title} description={description} />;
}

export default App;
