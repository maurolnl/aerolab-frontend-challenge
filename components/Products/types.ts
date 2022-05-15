export interface Images {
  url: string;
  hdUrl: string;
}

export interface IProduct {
  productId: string;
  name: string;
  cost: number;
  category: string;
  _id: string;
  createDate: string;
  img: Images;
}
