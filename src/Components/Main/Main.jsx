import { Titulo, Content } from "./MainStyle";
import { Lampada } from "../Lampada/Lampada";

export default function Main() {
  return (
    <Content>
      <Titulo>
        {'"Liberte a magia da programação com a Lâmpada do Aladim."'}
      </Titulo>
      <Lampada />
    </Content>
  );
}
