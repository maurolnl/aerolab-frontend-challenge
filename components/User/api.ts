import {PROD_URL} from "../../constants";

import {IUser} from "./types";

export interface INewPoints {
  message: string;
  "New Points": number;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getUser: async (): Promise<IUser> => {
    return fetch(`${PROD_URL}user/me`, {
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
  addPoints: async (amount: number): Promise<INewPoints> => {
    return fetch(`${PROD_URL}user/points`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: process.env.NEXT_PUBLIC_AEROLAB_PRIVATE_TOKEN as string,
      },
      body: JSON.stringify({amount: amount}),
    })
      .then((response) => response.json())
      .catch((e) => e.error);
  },
};
