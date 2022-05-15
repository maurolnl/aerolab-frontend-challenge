import useSWR from "swr";

import {fetcher} from "../utils/fetcher";

import {products_endpoint} from "./api";
import {IProduct} from "./types";

export function useProducts() {
  const {data, error} = useSWR(
    [products_endpoint, process.env.NEXT_PUBLIC_AEROLAB_PRIVATE_TOKEN as string],
    fetcher,
  );

  return {
    products: data as IProduct[],
    isLoading: !error && !data,
    isError: error,
  };
}
