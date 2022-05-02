import styled from "styled-components";
import SVG from "react-inlinesvg";

interface Props {
  rotation: string;
}

export const DropdownIcon = styled(SVG)<Props>`
  width: 32px;
  height: 32px;
  transform: rotate(${(props) => props.rotation});
  margin-left: 16px;
`;
