/* eslint-disable no-console */
import {createContext, useContext} from "react";
import {mutate} from "swr";

import {PROD_URL} from "../../constants";

import api, {INewPoints} from "./api";
import {useUserInfo} from "./hooks";
import {IUser} from "./types";

export interface Error {
  code: string;
  message: string;
}
interface Context {
  user: IUser;
  isLoading: boolean;
  error: Error | undefined;
  handleAddPoints: (amount: number) => Promise<boolean>;
}

const userContext = createContext({} as Context);

export const ProvideUser: React.FC = ({children}) => {
  const user = useProvideUser();

  return <userContext.Provider value={user}>{children}</userContext.Provider>;
};

export const useUser = () => {
  return useContext(userContext);
};

function useProvideUser() {
  const {user, isLoading, error} = useUserInfo();

  const handleAddPoints = async (amount: number) => {
    try {
      await api.addPoints(amount);

      mutate(`${PROD_URL}user/me`);

      return true;
    } catch (e) {
      console.log(e);

      return false;
    }

    return true;
  };

  return {
    user: user,
    isLoading,
    error,
    handleAddPoints,
  };
}
