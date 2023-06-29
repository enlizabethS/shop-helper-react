export interface IUser {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdDate: string;
  role: string;
  addressId: number;
  productsId: number[];
  purchasesId: number[];
}
