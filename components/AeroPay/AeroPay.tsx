import React, {useState} from "react";
import styled from "styled-components";
import {AnimatePresence, motion} from "framer-motion";

import {Colors, Shadows} from "../../styles/Theme";
import {Icon} from "../layout/AeroPayIcon.styled";
import {ButtonClose} from "../layout/Button/ButtonClose.styled";
import {ButtonCTA} from "../layout/Button/ButtonCTA.styled";
import {TextDefault} from "../layout/Text/TextDefault.styled";
import aeropay_3 from "../../assets/icons/aeropay-3.svg";
import close_icon from "../../assets/icons/cross-default.svg";
import ToggleGroup from "../layout/ToggleGroup";
import {useUser} from "../User/context";
import {ErrorToast, SuccessToast} from "../Toast/Toast";
import {useMedia} from "../layout/hooks";

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
  isOpen: boolean;
}

const AeroPay: React.FC<Props> = ({onClose, isOpen}) => {
  const [activeButton, setActiveButton] = useState<number>(1);
  const [isLoading, setLoading] = useState<boolean>(false);
  const isMobileS = useMedia(["(max-width: 620px)"], [true]);

  const {handleAddPoints} = useUser();

  const AMOUNTS = [1000, 5000, 7500];

  const handleChange = (index: number) => {
    setActiveButton(index);
  };

  const handleClick = async () => {
    setLoading(true);
    const response = await handleAddPoints(AMOUNTS[activeButton]);

    setLoading(false);

    if (response) {
      SuccessToast("Points ", "redeemed successfully", isMobileS);

      return;
    }
    ErrorToast(isMobileS);

    return;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Wrapper
          animate={{opacity: 1, scale: 1}}
          as={motion.div}
          exit={{opacity: 0}}
          initial={{opacity: 0, scale: 0.8}}
          transition={{duration: 0.2}}
        >
          <Header>
            <TextDefault color={"900"}>Add Balance</TextDefault>
            <ButtonClose onClick={onClose}>
              <Icon $isAeroCard={true} src={close_icon.src} variant="Mobile" />
            </ButtonClose>
          </Header>
          <Content>
            <AeroCard />
            <AmountAndButtonWrapper>
              <ToggleGroup
                callback={handleChange}
                h={"35px"}
                labels={AMOUNTS}
                selectButtonIndex={1}
                w={"100%"}
              />
              <ButtonCTA
                $textVariant="AllCaps"
                h="51px"
                mt="0px"
                variant={isLoading ? "Processing" : ""}
                w="100%"
                onClick={handleClick}
              >
                <Icon src={aeropay_3.src} variant="Mobile" />
                <TextDefault color={"100"} ml={"8px"}>
                  {isLoading ? "Processing..." : "Add Points"}
                </TextDefault>
              </ButtonCTA>
            </AmountAndButtonWrapper>
          </Content>
        </Wrapper>
      )}
    </AnimatePresence>
  );
};

export default AeroPay;
