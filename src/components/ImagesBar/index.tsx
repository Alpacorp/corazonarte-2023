import { FC } from "react";
import { Image } from "../Image";
import {
  libroY,
  librosY,
  musicaY,
  pinturaY,
  tejidoY,
} from "../../assets/images";

interface ImageProps {
  id: number;
  url: string;
  caption: string;
}

interface ImagesBarProps {
  images: ImageProps[];
  size: "normal" | "small";
}

import "./styles.css";

export const ImagesBar: FC<ImagesBarProps> = ({ images, size }) => {
  return (
    <div className="images-bar" role="tabpanel" tabIndex={0}>
      {images.map((data: ImageProps) => (
        <Image
          key={data.id}
          image={data.url}
          caption={data.caption}
          size={size}
        />
      ))}
      <Image image={libroY} caption="Libro y" size="normal" />
      <Image image={librosY} caption="Libro y" size="normal" />
      <Image image={librosY} caption="Libro y" size="normal" />
      <Image image={musicaY} caption="Libro y" size="normal" />
      <Image image={pinturaY} caption="Libro y" size="normal" />
      <Image image={tejidoY} caption="Libro y" size="normal" />
    </div>
  );
};
