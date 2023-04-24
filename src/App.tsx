import { ImagesBar } from "./components/ImagesBar";
import { GovernorBar } from "./components/GovernorBar";
import { HomeLayout } from "./components/layouts/HomeLayout";
import { MainText } from "./components/MainText";
import { Portfolio } from "./components/Portfolio";
import { FooterLayout } from "./components/layouts/FooterLayout";

import { categories } from "./data/categories.json";
import { logos } from "./data/logos.json";

import "./index.css";

function App() {
  return (
    <>
      <HomeLayout>
        <Portfolio />
        <MainText />
        <ImagesBar data={categories} />
      </HomeLayout>
      <FooterLayout>
        <GovernorBar />
        <ImagesBar data={logos} />
      </FooterLayout>
    </>
  );
}

export default App;
