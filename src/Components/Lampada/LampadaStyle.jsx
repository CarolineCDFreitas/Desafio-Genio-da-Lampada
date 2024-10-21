import styled from "styled-components";

export const Titulo = styled.h1`
  color: #fff;
  font-family: "Sevillana", serif;
  font-size: clamp(1.5rem, 5vw, 4rem);
  font-weight: 400;
  line-height: 1.7;
  text-align: center;
  margin: 0.5rem;
  /* border: 5px solid darkgray; */
`;

export const Picture = styled.picture`
  border: 5px solid yellowgreen;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: clamp(70%, 40vw, 100%);
    max-width: 100%;
    max-height: 100%;
    border: 5px solid darkmagenta;

    @media (max-width: 799px){
        width: auto;
        height: 22rem;
    }
  }

`;

export const Conteiner = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
`;