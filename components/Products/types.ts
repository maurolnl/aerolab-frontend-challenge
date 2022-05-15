export interface Images {
  url: string;
  hdUrl: string;
}

export interface IProduct {
  name: string;
  cost: number;
  category: string;
  _id: string;
  createDate: string;
  img: Images;
}
