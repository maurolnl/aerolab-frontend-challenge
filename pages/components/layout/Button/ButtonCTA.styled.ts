import React from "react";
import styled from "styled-components";

import {Colors, Shadows, TextStyles} from "../../../../styles/Theme";

interface Props {
  mt?: string;
  w: string;
  h: string;
  variant?: string;
  textVariant?: string;
  borderRadius?: string;
}

export const ButtonCTA = styled.button<Props>`
  color: ${Colors.Neutral[0]};
  background: ${Colors.Brand.Default.Color};
  width: ${(p) => (p.w ? p.w : "318px")};
  height: ${(p) => (p.h ? p.h : "80px")};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: ${(p) => (p.mt ? p.mt : "")};
  cursor: pointer;
  border-radius: ${(p) => (p.borderRadius ? p.borderRadius : "24px")};
  border: none;
  padding: 0px;
  box-shadow: ${Shadows.Elevation1.Default};

  &:hover {
    background: ${Colors.Brand.Hover.Color};
  }

  ${(p) => {
    switch (p.textVariant) {
      case "AllCaps":
        return TextStyles.Bundler(TextStyles.Texts.L1.AllCapsUnspaced);

      default:
        return TextStyles.Bundler(TextStyles.Texts.L1.Default);
    }
  }}
`;
