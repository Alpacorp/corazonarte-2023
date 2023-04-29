import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Image } from "../../components/Image";

describe("Image Component", () => {
  test("renders image with correct src, alt, title, and className", () => {
    const testImage = "https://example.com/test-image.jpg";
    const testCaption = "Test Caption";
    const testSize = "normal";

    render(<Image image={testImage} caption={testCaption} size={testSize} />);

    const imageElement = screen.getByAltText(testCaption);

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", testImage);
    expect(imageElement).toHaveAttribute("alt", testCaption);
    expect(imageElement).toHaveAttribute("title", testCaption);
    expect(imageElement).toHaveClass("image__img normal");
  });

  test("renders small image with correct className", () => {
    const testImage = "https://example.com/test-image.jpg";
    const testCaption = "Test Caption";
    const testSize = "small";

    render(<Image image={testImage} caption={testCaption} size={testSize} />);

    const imageElement = screen.getByAltText(testCaption);

    expect(imageElement).toHaveClass("image__img small");
  });

  test("renders image container with correct role and tabIndex", () => {
    const testImage = "https://example.com/test-image.jpg";
    const testCaption = "Test Caption";
    const testSize = "normal";

    render(<Image image={testImage} caption={testCaption} size={testSize} />);

    const imageContainer = screen.getByRole("tabpanel");

    expect(imageContainer).toBeInTheDocument();
    expect(imageContainer).toHaveAttribute("tabIndex", "0");
  });
});
