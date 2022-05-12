import React, {useState} from "react";
import styled from "styled-components";

import {Colors} from "../../../../styles/Theme";
import {PagerIcon} from "../../layout/PagerIcon.styled";
import arrow from "../../../../assets/icons/chevron-default.svg";
import {TextDefault} from "../../layout/Text/TextDefault.styled";

const Wrapper = styled.div<{display?: string}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  display: ${(p) => (p.display ? p.display : "")};

  gap: 24px;

  padding: 12px 16px;

  border: 1px solid;
  border-color: ${Colors.Neutral[300]};
  border-radius: 16px;
`;

interface Props {
  isDisabled?: boolean;
}

const PagerButton = styled.button<Props>`
  background-color: ${(p) => (p.isDisabled ? Colors.Neutral[200] : Colors.Brand.Light)};

  width: 40px;
  height: 40px;
  padding: 8px;

  border: none;
  border-radius: 8px;

  cursor: ${(p) => (p.isDisabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${(p) => (p.isDisabled ? Colors.Neutral[200] : Colors.Brand.Light2)};
  }
`;

interface Props {
  display?: string;
}

const Pager: React.FC<Props> = ({display}) => {
  const [disabledLeft, setDisabledLeft] = useState<boolean>(true);
  const [disabledRight, setDisabledRight] = useState<boolean>(false);

  return (
    <Wrapper display={display}>
      <PagerButton isDisabled={disabledLeft}>
        <PagerIcon isDisabled={disabledLeft} rotation="180deg" src={arrow.src} variant="Desktop" />
      </PagerButton>
      <p>
        <TextDefault>Page </TextDefault>
        <TextDefault color="gradient">1 of 2</TextDefault>
      </p>
      <PagerButton isDisabled={disabledRight}>
        <PagerIcon isDisabled={disabledRight} rotation="0deg" src={arrow.src} variant="Desktop" />
      </PagerButton>
    </Wrapper>
  );
};

export default Pager;
