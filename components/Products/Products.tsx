import React from "react";
import styled from "styled-components";

import {device} from "../media/media";

import Product from "./Product";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  justify-items: center;
  row-gap: 48px;
  column-gap: 24px;

  @media ${device.desktop} {
    row-gap: 80px;
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media ${device.mobile} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${device.mobileS} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Products = () => {
  return (
    <Grid>
      <Product description="" image="" name="" />
      <Product description="" image="" name="" />
      <Product description="" image="" name="" />
      <Product description="" image="" name="" />
      <Product description="" image="" name="" />
      <Product description="" image="" name="" />
      <Product description="" image="" name="" />
    </Grid>
  );
};

export default Products;
