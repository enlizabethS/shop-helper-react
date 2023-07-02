export interface IUser {
  id: number | null;
  username: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  createdDate: string | null;
  role: string | null;
  addressId: number | null;
  productsId: number[] | null;
  purchasesId: number[] | null;
}
