import toast from "react-hot-toast";
import styled from "styled-components";

import close_icon from "../../assets/icons/cross-default.svg";
import success_icon from "../../assets/icons/system-success.svg";
import error_icon from "../../assets/icons/system-error.svg";
import {Colors, Shadows, TextStyles} from "../../styles/Theme";
import {Icon} from "../layout/AeroPayIcon.styled";
import {Stack} from "../layout/Stack.styled";
import {TextDefault} from "../layout/Text/TextDefault.styled";
import {ButtonClose} from "../layout/Button/ButtonClose.styled";
import {device} from "../media/media";

const Toast = styled.div<{variant?: string}>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  gap: 23px;
  padding: 24px;

  width: 100%;
  max-width: 532px;
  min-height: 80px;

  border: 2px solid;
  border-color: ${Colors.Green.Default};
  border-radius: 12px;

  box-shadow: ${Shadows.Elevation1.Default};

  color: ${Colors.Neutral[600]};
  background-color: ${Colors.Neutral[0]};

  ${TextStyles.Bundler(TextStyles.Texts.L1.Default)};

  ${(p) => {
    switch (p.variant) {
      case "Success":
        return `border-color: ${Colors.Green.Default};`;
      case "Error":
        return `border-color: ${Colors.Red.Default};`;
    }
  }}

  @media ${device.mobileS} {
    align-items: flex-start;
    ${TextStyles.Bundler(TextStyles.Texts.Mobile.L1.Default)};
  }
`;

const ButtonWraper = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  min-width: 24px;
`;

export const ErrorToast = (isMobileS: boolean) => {
  return toast.custom(
    (t) => (
      <Toast variant="Error">
        <Stack
          // alignitems={isMobileS ? "flex-start" : "center"}
          direction="row"
          gap={isMobileS ? "14.25px" : "15px"}
          width={isMobileS ? "216px" : ""}
        >
          <IconWrapper>
            <Icon src={error_icon.src} variant={isMobileS ? "Small" : "Desktop"} />
          </IconWrapper>
          <TextDefault whiteSpace="nowrap">There was a problem with the transaction</TextDefault>
        </Stack>
        <ButtonWraper>
          <ButtonClose onClick={() => toast.remove(t.id)}>
            <Icon src={close_icon.src} variant="Mobile" />
          </ButtonClose>
        </ButtonWraper>
      </Toast>
    ),
    {
      duration: 2000,
      position: "bottom-left",
    },
  );
};

export const SuccessToast = (name: string, msg: string, isMobileS: boolean) => {
  return toast.custom(
    (t) => (
      <Toast variant="Succcess">
        <Stack
          alignitems={isMobileS ? "flex-start" : "center"}
          direction="row"
          gap={isMobileS ? "14.25px" : "15px"}
        >
          <IconWrapper>
            <Icon src={success_icon.src} variant={isMobileS ? "Small" : "Desktop"} />
          </IconWrapper>
          <p>
            <TextDefault color="900">{name}</TextDefault>
            {msg}
          </p>
        </Stack>
        <ButtonWraper>
          <ButtonClose onClick={() => toast.remove(t.id)}>
            <Icon src={close_icon.src} variant="Mobile" />
          </ButtonClose>
        </ButtonWraper>
      </Toast>
    ),
    {
      duration: 2000,
      position: "bottom-left",
    },
  );
};
