import React, {useState} from "react";
import styled from "styled-components";

import aeropay_icon from "../assets/icons/aeropay-1.svg";
import arrow from "../assets/icons/chevron-default.svg";
import {Colors, Shadows, TextStyles} from "../styles/Theme";

import {DropdownIcon} from "./layout/DropdownIcon.styled";
import {Icon} from "./layout/AeroPayIcon.styled";
import AeroPay from "./AeroPay/AeroPay";
import {device} from "./media/media";
import {useMedia} from "./layout/hooks";
import {useUser} from "./User/context";
import {formatCurrency} from "./utils";

const AeroCoinButton = styled.button`
  display: flex;
  align-items: center;
  border: 1px solid;
  border-color: ${Colors.Neutral[300]};
  background-color: ${Colors.Neutral[0]};
  min-width: 143px;
  min-height: 40px;
  justify-content: space-between;
  border-radius: 16px;
  padding: 8px 16px;
  box-shadow: ${Shadows.Elevation1.HoverAndActive};
  cursor: pointer;
  z-index: 5;

  gap: 16px;

  ${Colors.Bundler(Colors.Brand.Default)}
  ${TextStyles.Bundler(TextStyles.Texts.L1.Default)}

  &:hover,
  &:focus {
    box-shadow: ${Shadows.Elevation1.HoverAndActive};
  }

  @media ${device.desktop} {
    min-height: 48px;
    min-width: 172px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 8px;
`;

const PaymentBox = styled.div`
  position: relative;
  z-index: 10;
`;

const AeroCoins = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const isDesktop = useMedia(["(min-width: 1470px)"], [true]);
  const {user, error} = useUser();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <PaymentBox>
      <AeroCoinButton onClick={() => setOpen(!isOpen)}>
        <Wrapper>
          <Icon src={aeropay_icon.src} variant={isDesktop ? "Desktop" : "Mobile"} />
          <p>{user ? formatCurrency(user.points) : error ? 0 : 0}</p>
        </Wrapper>
        <DropdownIcon rotation={isOpen ? "90deg" : "-90deg"} src={arrow.src} variant={"Desktop"} />
      </AeroCoinButton>
      <AeroPay isOpen={isOpen} onClose={handleClose} />
    </PaymentBox>
  );
};

export default AeroCoins;
