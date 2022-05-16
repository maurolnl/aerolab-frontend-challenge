import React from "react";
import styled from "styled-components";

import {TextDefault} from "../../layout/Text/TextDefault.styled";
import ToggleGroup from "../../layout/ToggleGroup";
import {device} from "../../media/media";
import {SORT_TYPES} from "../../../constants";
import {useFilters} from "../context";

const Wrapper = styled.div`
  display: none;

  @media ${device.desktop} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 16px;
  }
`;

const Sort = () => {
  const {handleSortChange} = useFilters();

  return (
    <Wrapper>
      <TextDefault whiteSpace="nowrap">Sort by: </TextDefault>
      <ToggleGroup callback={handleSortChange} gap="12px" labels={SORT_TYPES} padding="8px 24px" />
    </Wrapper>
  );
};

export default Sort;
