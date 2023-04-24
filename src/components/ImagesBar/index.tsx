import { Image } from "../Image";
import { FC } from "react";

import "./styles.css";

interface ImageProps {
  id: number;
  url: string;
  caption: string;
  width: number;
  height: number;
}

interface ImagesBarProps {
  data: ImageProps[];
}

export const ImagesBar: FC<ImagesBarProps> = ({ data }) => {
  return (
    <div className="images-bar">
      {data.map((data: ImageProps) => (
        <Image key={data.id} image={data.url} {...data} />
      ))}
    </div>
  );
};
