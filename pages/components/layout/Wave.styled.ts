import styled from "styled-components";
import SVG from "react-inlinesvg";

import {Colors} from "../../../styles/Theme";

interface Props {
  bottom: string;
  index: number;
}

export const WaveIcon = styled(SVG)<Props>`
  transform: rotate(-4.26deg);
  left: -30px;
  width: 400px;
  overflow: hidden;
  position: absolute;
  bottom: ${(p) => p.bottom}px;
  > path {
    stroke: ${Colors.Wave};
    stroke-width: ${(p) => (p.index > 4 ? "1px" : "2px")};
  }
`;
