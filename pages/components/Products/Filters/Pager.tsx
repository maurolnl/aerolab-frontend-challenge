import React from "react";
import styled from "styled-components";

import {Colors} from "../../../../styles/Theme";
import {PagerIcon} from "../../layout/PagerIcon.styled";
import arrow from "../../../../assets/icons/chevron-default.svg";
import {TextDefault} from "../../layout/Text/TextDefault.styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 24px;

  padding: 12px 16px;

  border: 1px solid;
  border-color: ${Colors.Neutral[300]};
  border-radius: 16px;
`;

const PagerButton = styled.button`
  background-color: ${Colors.Brand.Light};

  width: 40px;
  height: 40px;
  padding: 8px;

  border: none;
  border-radius: 8px;

  cursor: pointer;

  &:hover {
    background-color: ${Colors.Brand.Light2};
  }
`;

const Pager = () => {
  return (
    <Wrapper>
      <PagerButton>
        <PagerIcon rotation="180deg" src={arrow.src} variant="Desktop" />
      </PagerButton>
      <p>
        <TextDefault>Page </TextDefault>
        <TextDefault color="gradient">1 of 2</TextDefault>
      </p>
      <PagerButton>
        <PagerIcon rotation="0deg" src={arrow.src} variant="Desktop" />
      </PagerButton>
    </Wrapper>
  );
};

export default Pager;
