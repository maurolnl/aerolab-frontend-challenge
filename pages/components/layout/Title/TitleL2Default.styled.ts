import styled from "styled-components";

import {Colors, TextStyles} from "../../../../styles/Theme";

interface TitleProp {
  display?: string;
  variant: string;
}

export const TitleL2Default = styled.h2<TitleProp>`
  display: ${(p) => (p.display ? p.display : "")};

  ${TextStyles.Bundler(TextStyles.Headings.L2)};

  margin: 0;

  ${(p) => {
    switch (p.variant) {
      case "solid":
        return `
          color: ${Colors.Neutral[900]}
        `;
      case "gradient":
        return Colors.Bundler(Colors.Brand.Default);
      case "gradientExtended":
        return Colors.Bundler(Colors.Brand.DefaultExtended);
    }
  }}
`;
