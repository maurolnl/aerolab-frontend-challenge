import useSWR from "swr";

import {PROD_URL} from "../../constants";

import api from "./api";
import {IUser} from "./types";

const fetchUser = () => api.getUser();

export const useUserInfo = () => {
  const {data, error} = useSWR(`${PROD_URL}user/me`, fetchUser);

  return {
    user: data as IUser,
    isLoading: !error && !data,
    error: error,
  };
};
