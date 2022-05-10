export const size = {
  mobileS: "620px",
  mobile: "1023px",
  desktop: "1470px",
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width: ${size.mobile}) and (max-width: ${size.desktop})`,
  desktop: `(min-width: ${size.desktop})`,
};
