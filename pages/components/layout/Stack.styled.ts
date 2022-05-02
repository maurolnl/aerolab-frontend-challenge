import styled from "styled-components";

interface Props {
  direction: string;
  width: string;
  gap: string;
}

export const Stack = styled.div<Props>`
  display: flex;
  flex-direction: ${(p) => p.direction};
  width: ${(p) => p.width};
  gap: ${(p) => p.gap};
`;
