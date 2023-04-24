import { portfolioLogo } from "../../../assets/images";
import "./styles.css";

export const PortfolioLogo = () => {
  return (
    <div className="portfolio-logo">
      <img
        src={portfolioLogo}
        alt="imagen del logo del portafolio departamental de estímulos"
        title="imagen del logo del portafolio departamental de estímulos"
        className="portfolio-logo__image"
      />
    </div>
  );
};
