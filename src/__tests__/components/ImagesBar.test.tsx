import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ImagesBar } from "../../components/ImagesBar";

const mockImages = [
  {
    id: 1,
    url: "https://example.com/image1.jpg",
    caption: "Image 1 caption",
  },
  {
    id: 2,
    url: "https://example.com/image2.jpg",
    caption: "Image 2 caption",
  },
];

describe("ImagesBar", () => {
  test("renders the correct number of Image components", () => {
    render(<ImagesBar images={mockImages} size="normal" />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(mockImages.length);
  });

  test("renders the images with correct size", () => {
    render(<ImagesBar images={mockImages} size="normal" />);

    const images = screen.getAllByRole("img");
    images.forEach((image) => {
      expect(image).toHaveClass("normal");
    });
  });
});
