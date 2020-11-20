export const mediaQuery = (maxWidth: number): string => `
  @media (max-width: ${maxWidth}px)
`;
export const mediaMinQuery = (minWidth: number): string => `
  @media (min-width: ${minWidth}px)
`;
export const mediaMinMaxQuery = (minWidth: number, maxWidth: number): string => `
  @media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px)
`;

export const INNER_SIZE = 406 + 16 * 2; // 406 + padding horizontal * 2

const media = {
  xxlarge: mediaQuery(1920),
  xlarge: mediaQuery(1440),
  large: mediaQuery(1024),
  medium: mediaQuery(900),
  small: mediaQuery(720),
  xsmall: mediaQuery(375),
  pcWebMedium: mediaQuery(1279),
  mobile: mediaQuery(768),
};

export default media;
