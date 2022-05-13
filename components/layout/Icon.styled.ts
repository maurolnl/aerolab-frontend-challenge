import styled from "styled-components";
import SVG from "react-inlinesvg";

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
          width: 40px;
          height: 40px;
        `;
      case "Mobile":
        return `
          width: 33px;
          height: 33px;
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
`;
