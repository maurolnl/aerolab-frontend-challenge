import React from "react";
import styled from "styled-components";

import {Container} from "../layout/Container.styled";
import {TitleL2Default} from "../layout/Title/TitleL2Default.styled";

import Filters from "./Filters/Filters";
import Products from "./Products";

const Wrapper = styled.section`
  margin-top: 160px;
`;

const TitleWrapper = styled.div`
  position: absolute;
  width: 30%;
  height: 38px;
  gap: 10px;
`;

const TitlePosition = styled.div`
  position: relative;
  top: -38px;
  left: 126px;
`;

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 142px;

  gap: 42.5px;
`;

const ProductSection = () => {
  return (
    <Wrapper>
      <Container>
        <HeaderWrapper>
          <TitleWrapper>
            <TitleL2Default variant="gradient">tech</TitleL2Default>
            <TitlePosition>
              <TitleL2Default variant="solid">products</TitleL2Default>
            </TitlePosition>
          </TitleWrapper>
          <Filters />
        </HeaderWrapper>
        <Products />
      </Container>
    </Wrapper>
  );
};

export default ProductSection;
