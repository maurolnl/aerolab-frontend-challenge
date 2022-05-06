import styled from "styled-components";
import SVG from "react-inlinesvg";

interface Props {
  variant?: string;
}

export const SelectIcon = styled(SVG)<Props>`
  width: 8px;
  height: 8px;
`;
