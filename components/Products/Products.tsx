import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import styled from "styled-components";

import {device} from "../media/media";

import Product from "./Product";
import {IProduct} from "./types";

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

interface Props {
  products: IProduct[];
}
const Products: React.FC<Props> = ({products}) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const limitPerPage = 16; //TODO: make it depend on useMedia() <- if desktop then 16, if tablet or mobile then 8.
  const offset = (pageNumber - 1) * limitPerPage;

  const router = useRouter();
  const {page} = router.query;

  useEffect(() => {
    if (page) {
      setPageNumber(Number(page));
    }
  }, [page]);

  return (
    <Grid>
      {products.map((product, index) => {
        if (index >= offset && index < limitPerPage + offset)
          return (
            <Product
              key={product._id}
              category={product.category}
              images={product.img}
              name={product.name}
              price={product.cost}
            />
          );
      })}
    </Grid>
  );
};

export default Products;
