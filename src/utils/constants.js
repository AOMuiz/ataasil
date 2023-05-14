export const WEIGHTS = {
  light: 300,
  normal: 400,
  bold: 700,
  extraBold: 800,
};

export const BREAKPOINTS = {
  sm: 639,
  md: 767,
  phone: 600,
  tablet: 950,
  laptop: 1300,
};

export const QUERIES = {
  sm: `(max-width: ${BREAKPOINTS.sm / 16}rem)`,
  md: `(max-width: ${BREAKPOINTS.md / 16}rem)`,
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
};
