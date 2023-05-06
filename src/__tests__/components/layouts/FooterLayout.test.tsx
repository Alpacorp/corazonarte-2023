import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { FooterLayout } from "../../../components/layouts/FooterLayout";

describe("FooterLayout", () => {
  test("renders the children content inside the footer layout", () => {
    const childText = "Test content";
    render(<FooterLayout>{childText}</FooterLayout>);

    const footerLayout = screen.getByText(childText);
    expect(footerLayout).toBeInTheDocument();
    expect(footerLayout).toHaveClass("footer-layout");
  });
});
