export const size = {
  mobile: "1023px",
  desktop: "1470px",
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width: ${size.mobile}) and (max-width: ${size.desktop})`,
  desktop: `(min-width: ${size.desktop})`,
};
