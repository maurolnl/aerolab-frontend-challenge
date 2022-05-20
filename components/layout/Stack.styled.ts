import styled from "styled-components";

interface Props {
  direction: string;
  width?: string;
  gap?: string;
  alignitems?: string;
}

export const Stack = styled.div<Props>`
  display: flex;
  flex-direction: ${(p) => p.direction};
  width: ${(p) => (p.width ? p.width : "")};
  gap: ${(p) => (p.gap ? p.gap : "")};
  align-items: ${(p) => (p.alignitems ? p.alignitems : "")};
`;
