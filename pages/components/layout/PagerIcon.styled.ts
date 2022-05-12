import styled from "styled-components";
import SVG from "react-inlinesvg";

import {Colors} from "../../../styles/Theme";

interface Props {
  variant: string;
  rotation: string;
  isDisabled?: boolean;
}

export const PagerIcon = styled(SVG)<Props>`
  transform: rotate(${(props) => props.rotation});

  > path {
    stroke: ${(p) => (p.isDisabled ? Colors.Neutral[300] : "")};
  }

  ${(p) => {
    switch (p.variant) {
      case "Desktop":
        return `
          width: 24px
          height: 24px
        `;
      case "Mobile":
        return `
          width: 24px
          height: 24px
        `;
    }
  }}
`;
