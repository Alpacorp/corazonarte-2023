import { PortfolioLogo } from "./Logo";
import { PortfolioText } from "./Text";

import "./styles.css";

export const Portfolio = () => {
  return (
    <div className="portfolio">
      <PortfolioLogo />
      <PortfolioText />
    </div>
  );
};
