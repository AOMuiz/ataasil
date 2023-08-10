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

/* For pdf */
.react-pdf__Page {
  margin-top: 10px;
  
}
.react-pdf__Page__textContent {
  border: 1px solid darkgrey;
  box-shadow: 5px 5px 5px 1px #ccc;
  border-radius: 5px;
  display:none
}

.react-pdf__Page__annotations.annotationLayer {
  /* padding: 20px; */
  display: none;
}

.react-pdf__Page__canvas {
  margin: 0 auto;
  width: '100%'
}

/* For all pages */
.all-page-container {
  height: 100%;
  max-height: 500px;
  overflow: auto;
}
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
