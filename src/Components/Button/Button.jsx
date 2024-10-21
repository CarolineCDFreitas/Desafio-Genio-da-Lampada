import styled from "styled-components";

export const Button = styled.button`
  font-family: "Sevillana", serif;
  font-size: 2rem;
  margin: 0.5em;
  border-radius: 6rem;
  width: clamp(15rem, 30vw, 20rem);
  height: clamp(1.5rem, 30vw, 4rem);
  background-color: #007bff;
  color: #fff;
  border: none;

  @media (max-width: 799px) {
    background-color: #b74794;
  }
`;
