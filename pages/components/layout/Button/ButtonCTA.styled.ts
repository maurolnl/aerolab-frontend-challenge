import React from "react";
import styled from "styled-components";

import {Colors, Shadows, TextStyles} from "../../../../styles/Theme";

interface Props {
  mt?: string;
  w: string;
  h: string;
  variant?: string;
}

export const ButtonCTA = styled.button<Props>`
  ${TextStyles.Bundler(TextStyles.Texts.L1.AllCaps)}
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
  border-radius: 24px;
  border: 1px solid transparent;
  padding: 0px;
  box-shadow: ${Shadows.Elevation1.Default};

  &:hover {
    background: ${Colors.Brand.Hover.Color};
  }
`;
