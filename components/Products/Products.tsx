import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";

import {PRODUCTS_CATEGORIES, SORT_TYPES} from "../../constants";
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
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>();
  const {page, limit, sort, filter, handleTotalChange, total} = useFilters();
  const offset = (page - 1) * limit;

  const filterByAllProducts = PRODUCTS_CATEGORIES[0];
  const filterByPCAccessories = PRODUCTS_CATEGORIES[1];

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
  }, [filter]);

  console.log(total);

  return (
    <Grid>
      {filteredProducts &&
        filteredProducts.map((product, index) => {
          if (index >= offset && index < limit + offset)
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
