import styled from "styled-components";

import {Colors, TextStyles} from "../../../styles/Theme";
import {device} from "../../media/media";

interface Props {
  isActive: boolean;
  w?: string;
  h?: string;
  padding?: string;
}

export const ButtonSelector = styled.button<Props>`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;

  width: ${(p) => (p.w ? p.w : "")};
  height: ${(p) => (p.h ? p.h : "")};

  border: none;
  border-radius: 12px;

  margin-bottom: 5px;
  padding: ${(p) => (p.padding ? p.padding : "8px 0px")};

  color: ${Colors.Neutral[100]};
  background: ${(p) => (p.isActive ? Colors.Brand.Default.Color : Colors.Neutral[200])};

  cursor: pointer;
  white-space: nowrap;

  ${TextStyles.Bundler(TextStyles.Texts.L1.Default)};

  @media ${device.mobile} {
    ${TextStyles.Bundler(TextStyles.Texts.Mobile.L1.Default)};

    padding: ${(p) => (p.padding ? "8px 16px" : "8px 0px")};
  }

  &:hover {
    background: ${Colors.Brand.Hover.Color};
    > p {
      background: none;
      -webkit-background-clip: unset;
      background-clip: unset;
      -webkit-text-fill-color: unset;
      color: ${Colors.Neutral[200]};
    }
  }

  ${(p) =>
    p.isActive
      ? ""
      : `> p {
    ${Colors.Bundler(Colors.Brand.Default)};
  }
  `}
`;
