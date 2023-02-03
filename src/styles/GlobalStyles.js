import { createGlobalStyle } from "styled-components";
import "@fontsource/raleway"
import "@fontsource/raleway/600.css"
import "@fontsource/teko/index.css"

const GlobalStyles = createGlobalStyle`
/* General Setup Code (inc. clearfix & border-box) */

* { -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; }

.sr-only { position: absolute; width: 1px; height: 1px; margin: -1px; border: 0; padding: 0; white-space: nowrap; clip-path: inset(100%); clip: rect(0 0 0 0); overflow: hidden;}
    :root{
        --black:#323239;
        --gray:#7B7E83;
        --white: #FBFCFD;
        --lightestBlue:#EEF7FD;
        --lightBlue: #EBF5FB;
        --blue: #39b1ed;
        --cyan:#C4F0F1;
        --darkcyan: #B4DEE3;

        --shadow: #DDE9F0;

        --border-thin: 3px solid var(--white);
        --border: 6px solid var(--white);
    --bodyFont: "Raleway", sans-serif;
	--tempFont: "Teko", sans-serif;
    }

    html {
        font-size:62.5%;
    }

    body {
        background:var(--lightBlue);
        font-family:var(--bodyFont);
        text-align:center;
    }

    .wrapper {
        max-width:850px;
        width:80%;
        margin: 0 auto;
    }

    ul {
        list-style:none;
        margin: 0;
        padding: 0;
    }

    p,
    a,
    h2,
    h3 {
        font-weight:400;
        color:var(--gray);
    }

    h2 {
        font-size:2.4rem;
        margin:5px 0;
    }

    p {
        margin:5px 0;
        font-size:2rem;
    }

    .temp {
        font-family:var(--tempFont);
        font-weight:500;
        font-size:2.8rem;
        letter-spacing:0.05rem;
        color:var(--black);
        &.todayTemp {
            font-size:5rem;
        }
    }

    img {
        display:block;
        width:100%;
        height:auto;
    }


`

export default GlobalStyles