import { FC } from "react";

import "./styles.css";

interface ImageProps {
  image: string;
  caption: string;
  width: number;
  height: number;
}

export const Image: FC<ImageProps> = ({ image, caption, width, height }) => {
  return (
    <div className="image">
      <img
        src={image}
        alt={caption}
        title={caption}
        width={width}
        height={height}
        className="image__img"
      />
    </div>
  );
};
