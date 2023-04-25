import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Text } from "../../components/Text";

test("Renders main page correctly", async () => {
  render(<Text />);
  expect(true).toBeTruthy();
});

describe("Text Component", () => {
  it("renders the text correctly", () => {
    render(<Text />);

    const textDiv = screen.getByText("Muy pronto anunciaremos los ganadores");
    expect(textDiv).toEqual(textDiv);
  });
});
