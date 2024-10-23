import styled from "styled-components";

export const Conteiner = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
`;

export const Titulo = styled.h1`
  color: #fff;
  font-family: "Sevillana", serif;
  font-size: clamp(1.5rem, 5vw, 4rem);
  font-weight: 400;
  line-height: 1.7;
  text-align: center;
  margin: 0.5rem;
`;

export const Picture = styled.picture`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: clamp(70%, 70vw, 100%);
    max-width: 100%;
    max-height: 31.5rem;

    @media (max-width: 799px) {
      width: auto;
      height: 22rem;
    }
  }
`;
