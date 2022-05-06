import styled from "styled-components";

import {Colors, TextStyles} from "../../../../styles/Theme";

interface TitleProp {
  variant: string;
}

export const TitleL2Default = styled.h1<TitleProp>`
  ${TextStyles.Bundler(TextStyles.Headings.L2)}

  margin: 0;

  ${(p) => {
    switch (p.variant) {
      case "solid":
        return `
          color: ${Colors.Neutral[900]}
        `;
      case "gradient":
        return Colors.Bundler(Colors.Brand.Default);
    }
  }}
`;
