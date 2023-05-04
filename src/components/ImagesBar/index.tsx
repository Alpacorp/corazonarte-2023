import { FC } from "react";
import { Image } from "../Image";

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
    </div>
  );
};
