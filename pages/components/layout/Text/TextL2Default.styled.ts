import styled from "styled-components";

import {Colors, TextStyles} from "../../../../styles/Theme";

interface Props {
  variant?: string;
  color?: string;
}

export const TextL2Default = styled.p<Props>`
  ${(p) => {
    switch (p.color) {
      case "100":
        return `color: ${Colors.Neutral[100]};`;
      case "900":
        return `color: ${Colors.Neutral[900]};`;
      case "gradient":
        return Colors.Bundler(Colors.Brand.Default);
      default:
        return `color: ${Colors.Neutral[600]};`;
    }
  }}

  ${(p) => {
    switch (p.variant) {
      case "AllCaps":
        return TextStyles.Bundler(TextStyles.Texts.L2.AllCaps);
      default:
        return TextStyles.Bundler(TextStyles.Texts.L2.Default);
    }
  }}
`;
