import React from "react";
import styled from "styled-components";

import {Container} from "../layout/Container.styled";
import {TitleL2Default} from "../layout/Title/TitleL2Default.styled";

import Filters from "./Filters/Filters";
import PageDescription from "./PageDescription";
import Products from "./Products";

const Wrapper = styled.section`
  margin-top: 160px;
  margin-bottom: 160px;
`;

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 142px;

  gap: 42.5px;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 64px;
`;

const ProductSection = () => {
  return (
    <Wrapper>
      <Container>
        <SectionWrapper>
          <HeaderWrapper>
            <div>
              <TitleL2Default display="inline" variant="gradientExtended">
                tech
              </TitleL2Default>
              <TitleL2Default display="inline" variant="solid">
                products
              </TitleL2Default>
            </div>
            <Filters />
          </HeaderWrapper>
          <Products />
          <PageDescription />
        </SectionWrapper>
      </Container>
    </Wrapper>
  );
};

export default ProductSection;
