import { useState } from "react";
import { Picture, Conteiner, Titulo } from "./LampadaStyle";
import { Button } from "../Button/Button";

export const Lampada = () => {
  const [ehEsfregada, setEhEsfregada] = useState(false);

  const trocarLampada = () => {
    setEhEsfregada(!ehEsfregada);
  };

  const imgDestktop = ehEsfregada
    ? "/imgs/genio-desktop.png"
    : "/imgs/lampada-desktop.png";
  const imgMobile = ehEsfregada
    ? "/imgs/genio-mobile.png"
    : "/imgs/lampada-mobile.png";

  return (
    <Conteiner>
      <Titulo>
        {'"Liberte a magia da programação com a Lâmpada do Aladim."'}
      </Titulo>
      <Picture>
        <source media="(max-width: 799px)" srcSet={imgMobile} />
        <img className="lampada" src={imgDestktop} alt="Lâmpada" />
      </Picture>
      <Button onClick={trocarLampada}>Clique aqui</Button>
    </Conteiner>
  );
};
