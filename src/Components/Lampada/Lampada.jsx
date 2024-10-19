import { useState } from "react";
import { Picture } from "./LampadaStyle";
import ImagemGenioMobile from "../../assets/imgs/genio-mobile.png";
import ImagemDaLampadaMobile from "../../assets/imgs/lampada-mobile.png";
import ImagemGenioDesktop from "../../assets/imgs/genio-desktop.png";
import ImagemDaLampadaDesktop from "../../assets/imgs/lampada-desktop.png";

export const Lampada = () => {
  const [esfregada, setEsfregada] = useState(false);
  const trocarLampada = () => {
    setEsfregada(!esfregada);
  };

  return (
    <Picture>
      <source
        media="(max-width: 800px)"
        srcSet={esfregada ? ImagemGenioMobile : ImagemDaLampadaMobile}
      />
      <img
        className="lampada"
        src={esfregada ?  ImagemGenioDesktop : ImagemDaLampadaDesktop}
        alt="Lâmpada"
        onClick={trocarLampada}
      />
    </Picture>
  );
};
