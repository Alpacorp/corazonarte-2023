import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { PortfolioText } from "../../../components/Portfolio/Text";

describe("PortfolioText Component", () => {
  it("renders the title correctly", () => {
    render(<PortfolioText />);

    const title = screen.getByRole("heading", { level: 3 });
    expect(title).toBeInTheDocument();

    const spans = Array.from(title.querySelectorAll("span"));
    const orangeSpans = spans.filter(
      (span) =>
        span.textContent === "Portafolio" || span.textContent === "de Estímulos"
    );
    const blueDarkSpan = spans.find(
      (span) => span.textContent === "Departamental"
    );

    expect(orangeSpans.length).toBe(2);
    expect(orangeSpans[0].textContent).toBe("Portafolio");
    expect(orangeSpans[1].textContent).toBe("de Estímulos");

    expect(blueDarkSpan).not.toBeNull();
    if (blueDarkSpan) {
      expect(blueDarkSpan.textContent).toBe("Departamental");
    }
  });
});
