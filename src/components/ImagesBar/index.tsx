import { Image } from "../Image";
import { FC } from "react";

import {
  libros,
  libro,
  artesanias,
  teatro,
  cine,
  pintura,
  tejidos,
  musica,
} from "../../assets/images";

import "./styles.css";

export const ImagesBar: FC = () => {
  return (
    <div className="images-bar" role="tabpanel" tabIndex={0}>
      <Image
        image={libros}
        caption="imagen de varios libros"
        width={70}
        height={70}
      />
      <Image
        image={libro}
        caption="imagen de un libro"
        width={70}
        height={70}
      />
      <Image
        image={artesanias}
        caption="imagen de un jarrón artesanal"
        width={70}
        height={70}
      />
      <Image
        image={teatro}
        caption="imagen de dos máscaras de teatro"
        width={70}
        height={70}
      />
      <Image
        image={cine}
        caption="imagen de una cartelera de cine"
        width={70}
        height={70}
      />
      <Image
        image={pintura}
        caption="imagen de un caballete con unos pinceles"
        width={70}
        height={70}
      />
      <Image
        image={tejidos}
        caption="imagen de un tejido"
        width={70}
        height={70}
      />
      <Image
        image={musica}
        caption="imagen de una nota musical"
        width={70}
        height={70}
      />
    </div>
  );
};
