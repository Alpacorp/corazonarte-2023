import { Image } from "../Image";
import { FC } from "react";

import {
  idecut,
  cundinamarcaRegion,
  gobernacionCun,
} from "../../assets/images";

import "./styles.css";

export const FooterImagesBar: FC = () => {
  return (
    <div className="images-bar">
      <Image
        image={idecut}
        caption="logo del idecut"
        width={150}
        height={150}
      />
      <Image
        image={cundinamarcaRegion}
        caption="logo de la región de cundinamarca"
        width={150}
        height={150}
      />
      <Image
        image={gobernacionCun}
        caption="logo de la gobernación de cundinamarca"
        width={150}
        height={150}
      />
    </div>
  );
};
