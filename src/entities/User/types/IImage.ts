import { IProduct } from "./IProduct";

export interface IImage{
id: number;
  url: string;
  title: string;
  product: IProduct;
}