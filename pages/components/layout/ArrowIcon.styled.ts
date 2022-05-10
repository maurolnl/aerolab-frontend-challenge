import styled from "styled-components";
import SVG from "react-inlinesvg";

import {device} from "../media/media";

interface Props {
  rotation: string;
}

export const ArrowIcon = styled(SVG)<Props>`
  width: 20px;
  height: 20px;
  transform: rotate(${(props) => props.rotation});
  margin-left: 12.5px;

  @media ${device.tablet} {
    width: 16px;
    height: 16px;

    margin-left: 10.5px;
  }

  @media ${device.mobile} {
    width: 16px;
    height: 16px;

    margin-left: 10.5px;
  }
`;
