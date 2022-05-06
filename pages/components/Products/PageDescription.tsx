import React from "react";
import styled from "styled-components";

import {TextDefault} from "../layout/Text/TextDefault.styled";

import Pager from "./Filters/Pager";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 64px;
`;

const Empty = styled.div`
  width: 259px;
`;

const PageDescription = () => {
  return (
    <Wrapper>
      <Empty />
      <p>
        <TextDefault color="gradientSemiExtended">16 of 32</TextDefault>
        <TextDefault> products</TextDefault>
      </p>
      <Pager />
    </Wrapper>
  );
};

export default PageDescription;
