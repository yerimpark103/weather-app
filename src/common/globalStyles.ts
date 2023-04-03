import {css} from "@emotion/react";

export const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Suit";
  }

  @font-face {
    font-family: "Suit";
    src: url("/fonts/SUIT-Light.woff2") format("woff2");
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "Suit";
    src: url("/fonts/SUIT-Regular.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Suit";
    src: url("/fonts/Suit-Bold.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "Suit";
    src: url("/fonts/Suit-ExtraBold.woff2") format("woff2");
    font-weight: 800;
    font-style: normal;
  }
`;
