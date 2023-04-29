import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Survey } from "../../components/Survey";

describe("Survey Component", () => {
  test("renders survey iframe with correct src and title", () => {
    render(<Survey />);

    const surveyIframe = screen.getByTitle("Convocatoria");

    expect(surveyIframe).toBeInTheDocument();
    expect(surveyIframe).toHaveAttribute(
      "src",
      "https://es.surveymonkey.com/r/corazonarte2023"
    );
  });

  test("renders survey iframe with the correct className", () => {
    render(<Survey />);

    const surveyIframe = screen.getByTitle("Convocatoria");

    expect(surveyIframe).toHaveClass("survey-monkey-form");
  });
});
