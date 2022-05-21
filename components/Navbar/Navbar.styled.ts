import styled from "styled-components";

import {Colors, Shadows} from "../../styles/Theme";

interface Props {
  height: string;
  variant?: string;
}

export const StyledNavbar = styled.nav<Props>`
  height: ${(props) => props.height};
  padding: 40px 0px;

  position: sticky;
  top: 0;

  background-color: ${Colors.Neutral[0]};

  ${(p) => {
    switch (p.variant) {
      case "BorderActive":
        return `
          background-color: ${Colors.Neutral[0]};
          border-bottom: 1px solid;
          border-color: ${Colors.Neutral[300]};
          box-shadow: ${Shadows.Elevation1.HoverAndActive};
        `;
      default:
        return `border-bottom: 1px solid transparent;`;
    }
  }}

  z-index: 50;
`;
