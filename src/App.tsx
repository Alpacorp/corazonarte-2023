import { ImagesBar } from "./components/ImagesBar";
import { GovernorBar } from "./components/GovernorBar";
import { HomeLayout } from "./components/layouts/HomeLayout";
import { MainText } from "./components/MainText";
import { Portfolio } from "./components/Portfolio";
import { FooterLayout } from "./components/layouts/FooterLayout";
import { Survey } from "./components/Survey";
import { Text } from "./components/Text";
import { Preload } from "./components/Preload";

import { categories } from "./data/categories.json";
import { governor } from "./data/governor.json";

import "./index.css";

function App() {
  // const SurveyStatus = import.meta.env.VITE_SURVEY_ON;
  const SurveyStatus = false;
  return (
    <>
      <Preload open />
      <HomeLayout>
        <div className="information-section">
          <Portfolio />
          <MainText extended mainText="Corazonarte 2023" />
          <ImagesBar images={categories} size="small" />
        </div>
        <div className="survey-section">
          {SurveyStatus ? (
            <>
              <MainText extended={false} mainText="INSCRÍBETE AQUÍ:" />
              <Survey />
            </>
          ) : (
            <>
              <MainText extended={false} mainText="Gracias por participar" />
              <Text />
            </>
          )}
        </div>
      </HomeLayout>
      <FooterLayout>
        <GovernorBar />
        <ImagesBar images={governor} size="normal" />
      </FooterLayout>
    </>
  );
}

export default App;
