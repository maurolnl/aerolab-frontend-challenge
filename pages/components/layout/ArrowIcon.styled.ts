import styled from "styled-components";
import SVG from "react-inlinesvg";

interface Props {
  rotation: string;
}

export const ArrowIcon = styled(SVG)<Props>`
  width: 20px;
  height: 20px;
  transform: rotate(${(props) => props.rotation});
  margin-left: 12.5px;
`;
