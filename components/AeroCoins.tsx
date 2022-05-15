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

const CoinAmount = styled.p`
  margin-left: 8px;
`;
const AeroCoinButton = styled.button`
  display: flex;
  align-items: center;
  border: 1px solid;
  border-color: ${Colors.Neutral[300]};
  background-color: ${Colors.Neutral[0]};
  width: 143px;
  height: 40px;
  justify-content: space-between;
  border-radius: 16px;
  padding: 8px 16px;
  box-shadow: ${Shadows.Elevation1.HoverAndActive};
  cursor: pointer;
  z-index: 5;
  ${Colors.Bundler(Colors.Brand.Default)}
  ${TextStyles.Bundler(TextStyles.Texts.L1.Default)}

  &:hover,
  &:focus {
    box-shadow: ${Shadows.Elevation1.HoverAndActive};
  }

  @media ${device.desktop} {
    height: 48px;
    width: 156px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
          <CoinAmount>{user ? user.points : error ? 0 : 0}</CoinAmount>
        </Wrapper>
        <DropdownIcon
          rotation={isOpen ? "90deg" : "-90deg"}
          src={arrow.src}
          variant={isDesktop ? "Desktop" : "Mobile"}
        />
      </AeroCoinButton>
      {isOpen && <AeroPay onClose={handleClose} />}
    </PaymentBox>
  );
};

export default AeroCoins;
