import React from "react";
import {forwardRef} from "react";
import styled from "styled-components";

import {Container} from "../layout/Container.styled";
import {TitleL2Default} from "../layout/Title/TitleL2Default.styled";
import {device} from "../media/media";

import Filters from "./Filters/Filters";
import PageDescription from "./PageDescription";
import Products from "./Products";
import {IProduct} from "./types";

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 42.5px;
  @media ${device.desktop} {
    height: 142px;
  }

  @media ${device.mobileS} {
    gap: 40px;
  }
`;

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;

  gap: 64px;
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

interface Props {
  products: IProduct[];
  handleScroll: () => void;
}
const ProductSection = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {products, handleScroll} = props;

  return (
    <Container ref={ref}>
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
        <Products products={products} />
        <PageDescription handleScroll={handleScroll} />
      </SectionWrapper>
    </Container>
  );
});

ProductSection.displayName = "ProductSection";

export default ProductSection;
