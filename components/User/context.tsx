/* eslint-disable no-console */
import {createContext, useContext, useEffect, useState} from "react";

import api, {INewPoints} from "./api";
import {IUser} from "./types";

export interface Error {
  code: string;
  message: string;
}
interface Context {
  user: IUser | undefined;
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
  const [user, setUser] = useState<IUser>();
  const [error, setError] = useState<Error>();

  const handleAddPoints = async (amount: number) => {
    let newPoints: INewPoints | undefined;

    if (!user) return false;

    try {
      newPoints = await api.addPoints(amount);
      console.log(newPoints);

      setUser({...user, points: newPoints["New Points"]});
    } catch (e) {
      console.log(e);

      return false;
    }

    return true;
  };

  useEffect(() => {
    api
      .getUser()
      .then((user) => {
        setUser(user);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return {
    user: user && user,
    error,
    handleAddPoints,
  };
}
