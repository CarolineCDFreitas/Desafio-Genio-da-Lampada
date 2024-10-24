import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
margin:0;
padding: 0;
box-sizing: border-box;
}

body{
    background-image: url("./palacio-desktop.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100%;
    min-height: 100vh;
    
    @media (max-width: 799px) {
        background-image: url("./palacio-mobile.png");
    }
}

#root {
    height: 100%;
}`