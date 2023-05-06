import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { HomeLayout } from "../../../components/layouts/HomeLayout";

describe("HomeLayout", () => {
  test("renders the children content inside the home layout", () => {
    const childText = "Test content";
    render(<HomeLayout>{childText}</HomeLayout>);

    const homeLayout = screen.getByText(childText);
    expect(homeLayout).toBeInTheDocument();
    expect(homeLayout).toHaveClass("home-layout");
  });
});
