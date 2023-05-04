import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MainText, MainTextProps } from "../../components/MainText";

const defaultProps: MainTextProps = {
  extended: false,
  mainText: "Título principal",
};

const customProps: MainTextProps = {
  extended: true,
  mainText: "Título personalizado",
};

describe("MainText component", () => {
  test("renders mainText correctly", () => {
    render(<MainText {...defaultProps} />);
    const mainTextElement = screen.getByText("Título principal");
    expect(mainTextElement).toBeInTheDocument();
  });

  test("renders extended text when extended prop is true", () => {
    render(<MainText {...customProps} />);
    const subTitleElement = screen.getByText(/Arte/i);
    const textCursiveElement = screen.getByText("y");
    const lastSubTitleElement = screen.getByText(/parte/i);
    const progresoElement = screen.getByText("del progreso");

    expect(subTitleElement).toBeInTheDocument();
    expect(textCursiveElement).toBeInTheDocument();
    expect(textCursiveElement).toHaveClass("text-cursive");
    expect(lastSubTitleElement).toBeInTheDocument();
    expect(progresoElement).toBeInTheDocument();
  });

  test("does not render extended text when extended prop is false", () => {
    render(<MainText {...defaultProps} />);
    const subTitleElement = screen.queryByText(/Arte y parte/i);
    const lastSubTitleElement = screen.queryByText(/del progreso/i);
    expect(subTitleElement).not.toBeInTheDocument();
    expect(lastSubTitleElement).not.toBeInTheDocument();
  });

  test("has correct role and tabIndex attributes", () => {
    render(<MainText {...defaultProps} />);
    const containerElement = screen.getByRole("tabpanel");
    expect(containerElement).toHaveAttribute("tabIndex", "0");
  });
});
