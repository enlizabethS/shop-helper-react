export interface IProduct {
  id?: number;
  title: string;
  quantity: number;
  price: number;
  imagesId: number[];
  previewImageId?: number;
  createdDate: Date;
}
