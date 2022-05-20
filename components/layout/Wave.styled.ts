import styled from "styled-components";
import SVG from "react-inlinesvg";

import {Colors} from "../../styles/Theme";
import {device} from "../media/media";

interface Props {
  bottom: string;
  index: number;
}

export const AeroCardWave = styled(SVG)<Props>`
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

export const BGWave = styled(SVG)<{index: number}>`
  position: absolute;
  top: ${(p) => `calc(138px + ${p.index} * 15px)`};
  width: 100%;

  color: ${Colors.Neutral[100]};

  z-index: -2;

  @media ${device.desktop} {
    top: ${(p) => `calc(201px + ${p.index} * 15px)`};
  }
`;
