import styled from "styled-components";

import {Colors, TextStyles} from "../../../../styles/Theme";

interface Props {
  isActive: boolean;
  w?: string;
  h?: string;
}

export const ButtonSelector = styled.button<Props>`
  ${TextStyles.Bundler(TextStyles.Texts.L1.Default)};
  color: ${Colors.Neutral[100]};
  background: ${(p) => (p.isActive ? Colors.Brand.Default.Color : Colors.Neutral[200])};
  border-radius: 12px;
  padding: 8px 0px;
  cursor: pointer;
  border: 1px solid transparent;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  width: ${(p) => (p.w ? p.w : "")};
  height: ${(p) => (p.h ? p.h : "")};

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
