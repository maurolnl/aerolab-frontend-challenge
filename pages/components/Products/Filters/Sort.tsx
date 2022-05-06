import React from "react";
import styled from "styled-components";

import {TextDefault} from "../../layout/Text/TextDefault.styled";
import ToggleGroup from "../../layout/ToggleGroup";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 16px;
`;

const Sort = () => {
  const sortTypes = ["Most Recent", "Lowest Price", "Highest Price"];

  return (
    <Wrapper>
      <TextDefault whiteSpace="nowrap">Sort by: </TextDefault>
      <ToggleGroup gap="12px" labels={sortTypes} padding="8px 24px" />
    </Wrapper>
  );
};

export default Sort;
