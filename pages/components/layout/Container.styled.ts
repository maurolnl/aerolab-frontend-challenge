import styled from "styled-components";

import {device} from "../media/media";

interface Props {
  position?: string;
}

export const Container = styled.div<Props>`
  width: 1464px;
  max-width: 100%;
  margin: 0 auto;

  position: ${(p) => (p.position ? p.position : "")};

  @media ${device.tablet} {
    width: 985px;
  }
`;
