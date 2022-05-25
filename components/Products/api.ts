/* eslint-disable no-console */
import {MOCK_URL, PROD_URL} from "../../constants";

import {IProduct} from "./types";

export const products_endpoint =
  "https://private-anon-c695ebc5f5-aerolabchallenge.apiary-proxy.com/products";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllProducts: async (): Promise<IProduct[] | false> => {
    return fetch(`${PROD_URL}products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: process.env.NEXT_PUBLIC_AEROLAB_PRIVATE_TOKEN as string,
      },
    })
      .then((response) => response.json())
      .catch((e) => {
        console.log(e);

        return false;
      });
  },
  redeemProduct: async (productId: string): Promise<boolean> => {
    return fetch(`${PROD_URL}redeem`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: process.env.NEXT_PUBLIC_AEROLAB_PRIVATE_TOKEN as string,
      },
      body: JSON.stringify({productId: productId}),
    })
      .then(() => true)
      .catch((e) => false);
  },
};
