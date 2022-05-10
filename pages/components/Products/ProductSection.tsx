import React from "react";
import styled from "styled-components";

import {Container} from "../layout/Container.styled";
import {TitleL2Default} from "../layout/Title/TitleL2Default.styled";
import {device} from "../media/media";

import Filters from "./Filters/Filters";
import PageDescription from "./PageDescription";
import Products from "./Products";

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${device.desktop} {
    height: 142px;
  }

  gap: 42.5px;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 64px;
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

const ProductSection = () => {
  return (
    <Container>
      <SectionWrapper>
        <HeaderWrapper>
          <TitleWrapper>
            <TitleL2Default display="inline" variant="gradientExtended">
              tech
            </TitleL2Default>
            <TitleL2Default display="inline" variant="solid">
              products
            </TitleL2Default>
          </TitleWrapper>
          <Filters />
        </HeaderWrapper>
        <Products />
        <PageDescription />
      </SectionWrapper>
    </Container>
  );
};

export default ProductSection;
