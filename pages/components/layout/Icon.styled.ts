import styled from "styled-components";
import SVG from "react-inlinesvg";

import {Colors} from "../../../styles/Theme";

interface Props {
  variant?: string;
  rotation?: string;
  background?: string;
  valign?: string;
}

export const Icon = styled(SVG)<Props>`
  transform: rotate(${(props) => (props.rotation ? props.rotation : "")});
  vertical-align: ${(p) => (p.valign ? p.valign : "")};

  ${(p) => {
    switch (p.variant) {
      case "Desktop":
        return `
          width: 48px;
          height: 48px;
        `;
      case "Mobile":
        return `
          width: 20px;
          height: 20px;
        `;
      case "Github":
        return `
          width: 28px;
          height: 28px;
        `;
      default:
        return `
          width: 24px;
          height: 24px;
    `;
    }
  }}

  ${(p) => {
    switch (p.background) {
      case "Light":
        return `
          background: ${Colors.Brand.Light2};
          border-radius: 8px;
        `;
      default:
        return `
          background: none
    `;
    }
  }}
`;
