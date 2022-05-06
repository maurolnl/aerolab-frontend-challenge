import styled from "styled-components";
import SVG from "react-inlinesvg";

interface Props {
  variant: string;
  rotation: string;
}

export const PagerIcon = styled(SVG)<Props>`
  transform: rotate(${(props) => props.rotation});

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
