import { FC } from "react";
import "./styles.css";

export interface MainTextProps {
  extended: boolean;
  mainText: string;
}

export const MainText: FC<MainTextProps> = ({ extended, mainText }) => {
  return (
    <div className="main-text" role="tabpanel" tabIndex={0}>
      <h1 className="main-text__title">{mainText}</h1>
      {extended && (
        <>
          <h2 className="main-text__subtitle">
            Arte <span className="text-cursive">y</span> parte
          </h2>
          <h3 className="main-text__subtitle--last">del progreso</h3>
        </>
      )}
    </div>
  );
};
