import { ImagesBar } from "./components/ImagesBar";
import { GovernorBar } from "./components/GovernorBar";
import { HomeLayout } from "./components/layouts/HomeLayout";
import { MainText } from "./components/MainText";
import { Portfolio } from "./components/Portfolio";
import { FooterLayout } from "./components/layouts/FooterLayout";
import { FooterImagesBar } from "./components/FooterImagesBar";

import "./index.css";

function App() {
  return (
    <>
      <HomeLayout>
        <Portfolio />
        <MainText />
        <ImagesBar />
      </HomeLayout>
      <FooterLayout>
        <GovernorBar />
        <FooterImagesBar />
      </FooterLayout>
    </>
  );
}

export default App;
