import "./home.css";
import FirstBox from "./components/firstBox";
import LogoPage from "../../components/logoPage";
import SecondBox from "./components/secondBox";
import ThirdBox from "./components/thirdBox";

export default function Home() {
  return (
    <div>
      <FirstBox />
      <LogoPage />
      <SecondBox />
      <ThirdBox />
    </div>
  );
}
