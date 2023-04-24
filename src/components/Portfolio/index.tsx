import { PortfolioLogo } from "./Logo";
import { PortfolioText } from "./Text";

import "./styles.css";

export const Portfolio = () => {
  return (
    <div className="portfolio" role="tabpanel" tabIndex={0}>
      <PortfolioLogo />
      <PortfolioText />
    </div>
  );
};
