import styled from "styled-components";
import SVG from "react-inlinesvg";

interface Props {
  variant: string;
  valign?: string;
}

export const Icon = styled(SVG)<Props>`
  vertical-align: ${(p) => (p.valign ? p.valign : "")};

  ${(p) => {
    switch (p.variant) {
      case "Desktop":
        return `
          width: 32px;
          height: 32px;
      `;
      case "Mobile":
        return `
          width: 24px;
          height: 24px;
        `;
      case "Small":
        return `
          width: 20px;
          height: 20px;
      `;
    }
  }}
`;
