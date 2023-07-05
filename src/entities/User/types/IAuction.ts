export interface IAuction {
  id: number;
  productId: number;
  createdDate: string;
  startDate: string;
  expirationDate: string;
  bidsId: number[];
  status: string;
}
