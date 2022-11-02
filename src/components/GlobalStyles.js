// components/GlobalStyles.js
import React from "react";
import { createGlobalStyle } from "styled-components";
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle`
  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased`}
  }
  html {
  --color-white: hsl(0deg 0% 100%);
  --color-primary: hsla(185, 61%, 50%, 1);
  --color-secondary: hsl(240deg 60% 63%);
  --color-grey-500: hsla(237, 16%, 27%, 1);
  --color-grey-100: hsla(210, 11%, 96%, 1);

  --color-backdrop: hsl(220deg 5% 40% / 0.8);
  --font: "Almarai", sans-serif;
}

html,
body,
#root {
  height: 100%;
  font-family: var(--font);
  scroll-behavior: smooth;
}
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
