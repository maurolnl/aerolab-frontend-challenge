import {AnimatePresence, motion} from "framer-motion";
import React, {useEffect, useState} from "react";
import styled from "styled-components";

import {PRODUCTS_CATEGORIES, SORT_TYPES} from "../../constants";
import {TextDefault} from "../layout/Text/TextDefault.styled";
import {device} from "../media/media";

import {useFilters} from "./context";
import Product from "./Product";
import {IProduct} from "./types";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  justify-items: center;
  row-gap: 48px;
  column-gap: 24px;

  min-height: 506px;

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

const EmptyGrid = styled.div`
  display: grid;
  place-items: center;

  min-height: 506px;
`;

interface Props {
  products: IProduct[];
}
const Products: React.FC<Props> = ({products}) => {
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>();
  const {page, limit, sort, filter, handleTotalChange, total} = useFilters();
  const offset = (page - 1) * limit;

  const filterByAllProducts = PRODUCTS_CATEGORIES[0];
  const filterByPCAccessories = PRODUCTS_CATEGORIES[1];

  const sortByLowestPrice = SORT_TYPES[1];
  const sortByHighestPrice = SORT_TYPES[2];

  useEffect(() => {
    const newProducts = products.filter((product) => {
      if (filter === filterByAllProducts) return true;
      else if (filter === filterByPCAccessories) {
        if (product.category === filter || product.category === "PC Accesories") return true; //this is because a misspelling on the fetched product's categories
      } else if (product.category === filter) {
        return true;
      }

      return false;
    });

    handleTotalChange(newProducts.length);
    setFilteredProducts(newProducts);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  if (products.length === 0) {
    return (
      <EmptyGrid>
        <TextDefault>There are no products available. Please, return later.</TextDefault>
      </EmptyGrid>
    );
  }

  return (
    <Grid as={motion.div}>
      <AnimatePresence>
        {filteredProducts &&
          filteredProducts
            //Map to preserve relative order when filtering by most recent
            .map((product, index) => {
              return {
                index: index,
                product: product,
              };
            })
            .sort((productA, productB) => {
              if (sort === sortByLowestPrice) return productA.product.cost - productB.product.cost;
              if (sort === sortByHighestPrice) return productB.product.cost - productA.product.cost;

              return productA.index - productB.index;
            })
            .map((product, index) => {
              if (index >= offset && index < limit + offset)
                return (
                  <Product
                    key={product.product._id}
                    category={product.product.category}
                    images={product.product.img}
                    name={product.product.name}
                    price={product.product.cost}
                    productId={product.product._id}
                  />
                );
            })}
      </AnimatePresence>
    </Grid>
  );
};

export default Products;
