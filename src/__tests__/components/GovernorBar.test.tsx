import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { GovernorBar } from "../../components/GovernorBar";

describe("GovernorBar component", () => {
  beforeEach(() => {
    render(<GovernorBar />);
  });

  test("should render the main div with 'governor-bar' className", () => {
    const governorBarDiv = screen.getByTestId("governor-bar");
    expect(governorBarDiv).toBeInTheDocument();
    expect(governorBarDiv).toHaveClass("governor-bar");
  });

  test("should render the title", () => {
    const title = screen.getByText(/Nicolas Garcia Bustos/i);
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass("governor-bar__title");
  });

  test("should render the separator", () => {
    const separator = screen.getByTestId("separator");
    expect(separator).toBeInTheDocument();
    expect(separator).toHaveClass("governor-bar__separator");
  });

  test("should render the subtitle", () => {
    const subtitle = screen.getByText(/Gobernador/i);
    expect(subtitle).toBeInTheDocument();
    expect(subtitle).toHaveClass("governor-bar__subtitle");
  });
});
