import { FC } from "react";

import "./styles.css";

interface ImageProps {
  image: string;
  caption: string;
  size: "normal" | "small";
}

export const Image: FC<ImageProps> = ({ image, caption, size }) => {
  return (
    <div className="image" role="tabpanel" tabIndex={0}>
      <img
        src={image}
        alt={caption}
        title={caption}
        className={`image__img ${size === "normal" ? "normal" : "small"}`}
      />
    </div>
  );
};
