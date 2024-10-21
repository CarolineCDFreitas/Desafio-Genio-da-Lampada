import { Lampada } from "../Lampada/Lampada";
import styled from "styled-components";

const Content = styled.main`
  min-height: 100vh;
`;

export default function Main() {
  return (
    <Content>
      <Lampada />
    </Content>
  );
}
