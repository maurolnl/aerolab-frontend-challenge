import styled from "styled-components";
import SVG from "react-inlinesvg";

interface Props {
  rotation: string;
  variant?: string;
}

export const DropdownIcon = styled(SVG)<Props>`
  transform: rotate(${(props) => props.rotation});
  margin-left: 16px;

  ${(p) => {
    switch (p.variant) {
      case "Desktop":
        return `
          width: 24px;
          height: 24px;
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
