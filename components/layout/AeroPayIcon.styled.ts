import styled from "styled-components";
import SVG from "react-inlinesvg";

import {Colors} from "../../styles/Theme";

interface Props {
  variant: string;
  valign?: string;
  isDisabled?: string;
}

export const Icon = styled(SVG)<Props>`
  vertical-align: ${(p) => (p.valign ? p.valign : "")};

  > path {
    fill: ${(p) => (p.isDisabled ? Colors.Neutral[0] : "")};
  }

  > rect {
    fill: ${(p) => (p.isDisabled ? Colors.Neutral[500] : "")};
  }

  //Since aerocoins use this icon but its size on mobile small screens is still 24 x 24
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

          vertical-align: sub;
      `;
    }
  }}
`;
