import {IProduct} from "./types";

const prod_url = "https://coding-challenge-api.aerolab.co";

export const products_endpoint =
  "https://private-anon-c695ebc5f5-aerolabchallenge.apiary-proxy.com/products";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllProducts: async (): Promise<IProduct[]> => {
    return fetch(`${prod_url}/products?page=1`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: process.env.NEXT_PUBLIC_AEROLAB_PRIVATE_TOKEN as string,
      },
    })
      .then((response) => response.json())
      .catch((e) => e.message);
  },
};
