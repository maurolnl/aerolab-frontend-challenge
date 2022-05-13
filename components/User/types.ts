import {IProduct} from "../Products/types";

export interface IUser {
  id: string;
  name: string;
  points: number;
  redeemHistory: IProduct[];
  createDate: string;
}
