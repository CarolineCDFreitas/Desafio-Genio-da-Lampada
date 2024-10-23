import { useState } from "react";
import { Picture, Conteiner, Titulo } from "./LampadaStyle";
import { Button } from "../Button/Button";
import genioDesktop from "../../assets/imgs/genio-desktop.png";
import genioMobile from "../../assets/imgs/genio-mobile.png";
import lampadaDesktop from "../../assets/imgs/lampada-desktop.png";
import lampadaMobile from "../../assets/imgs/lampada-mobile.png";

export const Lampada = () => {
  const [ehEsfregada, setEhEsfregada] = useState(false);

  const trocarLampada = () => {
    setEhEsfregada(!ehEsfregada);
  };

  const imgDestktop = ehEsfregada ? genioDesktop : lampadaDesktop;
  const imgMobile = ehEsfregada ? genioMobile : lampadaMobile;
  const altText = ehEsfregada ? "Gênio saindo da lâmpada" : "Lâmpada mágica";

  return (
    <Conteiner>
      <Titulo>
        {'"Liberte a magia da programação com a Lâmpada do Aladim."'}
      </Titulo>
      <Picture>
        <source media="(max-width: 799px)" srcSet={imgMobile} />
        <img src={imgDestktop} alt={altText} />
      </Picture>
      <Button onClick={trocarLampada}>Clique aqui</Button>
    </Conteiner>
  );
};
