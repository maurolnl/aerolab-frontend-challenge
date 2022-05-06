import React from "react";
import styled from "styled-components";

import Product from "./Product";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  row-gap: 80px;
  column-gap: 24px;

  margin-top: 64px;
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
