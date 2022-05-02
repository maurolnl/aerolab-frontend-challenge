import styled from "styled-components";
import SVG from "react-inlinesvg";

interface Props {
  width?: string;
  height?: string;
}

export const Icon = styled(SVG)<Props>`
  width: ${(p) => (p.width ? p.width : "32px")};
  height: ${(p) => (p.height ? p.height : "32px")};
`;
