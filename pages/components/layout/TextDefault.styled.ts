import styled from "styled-components";

import {Colors, TextStyles} from "../../../styles/Theme";

interface Props {
  mt?: string;
  ml?: string;
  color?: string;
}

export const TextDefault = styled.p<Props>`
  margin-left: ${(p) => (p.ml ? p.ml : "")};
  margin-top: ${(p) => (p.mt ? p.mt : "")};
  ${TextStyles.Bundler(TextStyles.Texts.L1.Default)};

  ${(p) => {
    switch (p.color) {
      case "100":
        return `color: ${Colors.Neutral[100]}`;
      case "900":
        return `color: ${Colors.Neutral[900]}`;
      default:
        return `color: ${Colors.Neutral[600]}`;
    }
  }}
`;
