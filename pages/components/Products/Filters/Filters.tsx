import React from "react";
import styled from "styled-components";

import Divider_115 from "../../../../assets/icons/Divider_115.svg";
import {Divider} from "../../layout/Divider.styled";

import CategoryFilter from "./CategoryFilter";
import Pager from "./Pager";
import Sort from "./Sort";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

const CategoryAndSortWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0px;

  gap: 40px;
`;

const Filters = () => {
  return (
    <Wrapper>
      <CategoryAndSortWrapper>
        <CategoryFilter />
        <Divider src={Divider_115.src} variant="Desktop" />
        <Sort />
      </CategoryAndSortWrapper>
      <Pager />
    </Wrapper>
  );
};

export default Filters;
