import styled from "styled-components";
import SVG from "react-inlinesvg";

interface Props {
  rotation: string;
}

export const DropdownIcon = styled(SVG)<Props>`
  width: 24px;
  height: 24px;
  transform: rotate(${(props) => props.rotation});
  margin-left: 16px;
`;
