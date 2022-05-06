import styled from "styled-components";

import {Colors, TextStyles} from "../../../../styles/Theme";

interface Props {
  mt?: string;
  ml?: string;
  color?: string;
  whiteSpace?: string;
  variant?: string;
}

export const TextDefault = styled.span<Props>`
  white-space: ${(p) => (p.whiteSpace ? p.whiteSpace : "")};
  margin-left: ${(p) => (p.ml ? p.ml : "")};
  margin-top: ${(p) => (p.mt ? p.mt : "")};

  ${(p) => {
    switch (p.color) {
      case "100":
        return `color: ${Colors.Neutral[100]};`;
      case "900":
        return `color: ${Colors.Neutral[900]};`;
      case "gradient":
        return Colors.Bundler(Colors.Brand.Default);
      case "gradientExtended":
        return Colors.Bundler(Colors.Brand.DefaultExtended);
      case "gradientSemiExtended":
        return Colors.Bundler(Colors.Brand.DefaultSemiExtended);
      default:
        return `color: ${Colors.Neutral[600]};`;
    }
  }}

  ${(p) => {
    switch (p.variant) {
      case "AllCaps":
        return TextStyles.Bundler(TextStyles.Texts.L1.AllCaps);
      default:
        return TextStyles.Bundler(TextStyles.Texts.L1.Default);
    }
  }};
`;
