import styled from "styled-components";

import {Colors, TextStyles} from "../../../styles/Theme";

export const TextAllCap = styled.p`
  ${TextStyles.Bundler(TextStyles.Texts.L1.AllCaps)}
  color: ${Colors.Neutral[600]};
`;
