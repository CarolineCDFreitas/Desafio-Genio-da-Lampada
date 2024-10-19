import styled from "styled-components";

export const Picture = styled.picture`
  border: 5px solid yellowgreen;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img{
    width: 100%;

}
@media (max-width: 800px) {
    position: relative;
    top: 5rem;
}
`;
