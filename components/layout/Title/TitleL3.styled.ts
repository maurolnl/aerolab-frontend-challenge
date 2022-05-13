import styled from "styled-components";

import {Colors, TextStyles} from "../../../styles/Theme";
import {device} from "../../media/media";

interface TitleProp {
  variant: string;
}

export const TitleL3 = styled.h1<TitleProp>`
  ${TextStyles.Bundler(TextStyles.Headings.L3)}

  margin: 0;

  @media ${device.tablet} {
    ${TextStyles.Bundler(TextStyles.Headings.Mobile.L3)};
  }

  @media ${device.mobile} {
    ${TextStyles.Bundler(TextStyles.Headings.Mobile.L3)};
  }

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
