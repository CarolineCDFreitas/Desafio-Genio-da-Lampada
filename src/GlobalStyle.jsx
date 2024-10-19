import { createGlobalStyle } from "styled-components";
import BackgroundImageDesktop from "./assets/imgs/palacio-desktop.png";
import BackgroundImageMobile from "./assets/imgs/palacio-mobile.png";

export default createGlobalStyle`
*{
margin:0;
padding: 0;
box-sizing: border-box;
}

body{
display: flex;
justify-content: center;
align-items: center;
background-image: url(${BackgroundImageDesktop});
background-repeat: no-repeat;
background-size: cover;
background-position: center;

@media (max-width: 800px) {
    // height: 100vh;
    background-image: url(${BackgroundImageMobile});
    
}
}

main{
flex: 1}
`;
