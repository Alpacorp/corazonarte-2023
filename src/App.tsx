import { ImagesBar } from "./components/ImagesBar";
import { GovernorBar } from "./components/GovernorBar";
import { HomeLayout } from "./components/layouts/HomeLayout";
import { MainText } from "./components/MainText";
import { Portfolio } from "./components/Portfolio";
import { FooterLayout } from "./components/layouts/FooterLayout";
import { FooterImagesBar } from "./components/FooterImagesBar";
import { Survey } from "./components/Survey";

import "./index.css";
import { Text } from "./components/Text";

function App() {
  const SurveyStatus = import.meta.env.VITE_SURVEY_ON;
  return (
    <>
      <HomeLayout>
        <Portfolio />
        <MainText extended mainText="Corazonarte 2023" />
        <ImagesBar />
        {SurveyStatus === "true" ? (
          <>
            <MainText extended={false} mainText="INSCRIBETE AQUI;" />
            <Survey />
          </>
        ) : (
          <>
            <MainText extended={false} mainText="Gracias por participar" />
            <Text />
          </>
        )}
      </HomeLayout>
      <FooterLayout>
        <GovernorBar />
        <FooterImagesBar />
      </FooterLayout>
    </>
  );
}

export default App;
