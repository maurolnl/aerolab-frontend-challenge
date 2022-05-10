import styled from "styled-components";
import SVG from "react-inlinesvg";

interface Props {
  variant: string;
  display?: string;
}

export const Divider = styled(SVG)<Props>`
  display: ${(p) => (p.display ? p.display : "")};

  ${(p) => {
    switch (p.variant) {
      case "Desktop":
        return `
          width: 2px;
          height: 59px;
        `;
      case "Mobile":
        return `
          width: 20px;
          height: 20px;
        `;
      default:
        return `
          width: 24px;
          height: 24px;
    `;
    }
  }}
`;
