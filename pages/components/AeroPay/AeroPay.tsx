import React, {useState} from "react";
import styled from "styled-components";

import {Colors, Shadows} from "../../../styles/Theme";
import {Icon} from "../layout/AeroPayIcon.styled";
import {ButtonClose} from "../layout/Button/ButtonClose.styled";
import {ButtonCTA} from "../layout/Button/ButtonCTA.styled";
import {TextDefault} from "../layout/TextDefault.styled";
import aeropay_3 from "../../../assets/icons/aeropay-3.svg";
import close_icon from "../../../assets/icons/cross-default.svg";
import close_icon_active from "../../../assets/icons/cross-active.svg";
import Amounts from "../Amounts";

import AeroCard from "./AeroCard";

const Wrapper = styled.div`
  position: absolute;
  z-index: 40;
  top: 56px;
  right: 0px;
  height: 404px;
  width: 312px;
  border-radius: 16px;
  border: 1px solid ${Colors.Neutral[200]};
  background: ${Colors.Neutral[0]};
  box-shadow: ${Shadows.Elevation1.Default};
`;
const AmountAndButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  height: 346px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
  justify-content: space-between;
  border-bottom: 1px solid ${Colors.Neutral[200]};
`;

interface Props {
  onClose: () => void;
}

const AeroPay: React.FC<Props> = ({onClose}) => {
  const [isActive, setActive] = useState<boolean>(false);

  return (
    <Wrapper>
      <Header>
        <TextDefault color={"900"}>Add Balance</TextDefault>
        <ButtonClose onClick={onClose}>
          <Icon
            height={"24px"}
            src={isActive ? close_icon_active.src : close_icon.src}
            width={"24px"}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
          />
        </ButtonClose>
      </Header>
      <Content>
        <AeroCard />
        <AmountAndButtonWrapper>
          <Amounts />
          <ButtonCTA h="51px" mt="0px" w="100%">
            <Icon height={"24px"} src={aeropay_3.src} width={"24px"} />
            <TextDefault color={"100"} ml={"8px"}>
              Add Points
            </TextDefault>
          </ButtonCTA>
        </AmountAndButtonWrapper>
      </Content>
    </Wrapper>
  );
};

export default AeroPay;
