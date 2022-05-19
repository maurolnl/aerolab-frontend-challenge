import styled from "styled-components";

import {Colors, Shadows, TextStyles} from "../../../styles/Theme";
import {device} from "../../media/media";

interface Props {
  mt?: string;
  w: string;
  h: string;
  variant?: string;
  textVariant?: string;
  borderRadius?: string;
}

export const ButtonCTA = styled.button<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: ${(p) => (p.w ? p.w : "318px")};
  height: ${(p) => (p.h ? p.h : "80px")};

  border: none;
  border-radius: ${(p) => (p.borderRadius ? p.borderRadius : "24px")};

  padding: 0px;
  margin-top: ${(p) => (p.mt ? p.mt : "")};

  color: ${Colors.Neutral[0]};
  background: ${Colors.Brand.Default.Color};
  box-shadow: ${Shadows.Elevation1.Default};

  cursor: pointer;

  &:hover {
    background: ${(p) =>
      p.variant === "Disabled" ? Colors.Neutral[200] : Colors.Brand.Hover.Color};
  }

  ${(p) => {
    switch (p.variant) {
      case "Processing":
        return `
          opacity: 70%;
          cursor: not-allowed;
          `;

      case "Disabled":
        return `
          background: ${Colors.Neutral[200]};
          color: ${Colors.Neutral[600]};

          cursor: not-allowed;
        `;

      default:
        break;
    }
  }}

  ${(p) => {
    switch (p.textVariant) {
      case "AllCaps":
        return TextStyles.Bundler(TextStyles.Texts.L1.AllCapsUnspaced);

      default:
        return TextStyles.Bundler(TextStyles.Texts.L1.Default);
    }
  }}

  @media ${device.mobileS} {
    ${(p) => {
      switch (p.textVariant) {
        case "AllCaps":
          return TextStyles.Bundler(TextStyles.Texts.Mobile.L1.AllCapsUnspaced);

        default:
          return TextStyles.Bundler(TextStyles.Texts.Mobile.L1.Default);
      }
    }}
  }
`;
