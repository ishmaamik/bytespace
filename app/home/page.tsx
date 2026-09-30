import "./home.css";
import FirstBox from "./firstBox";
import LogoPage from "../../components/logoPage";
import SecondBox from "./secondBox"

export default function Home() {
  return (
    <div>
      <FirstBox />
      <LogoPage />
      <SecondBox/>
    </div>
  );
}
