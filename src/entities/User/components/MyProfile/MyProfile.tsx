import { useAppSelector } from "shared";

import {} from "./MyProfile.styled";

export const MyProfile: React.FC = () => {
  const currentUser = useAppSelector(state => state.users.currentUser);

  const address = {
    street: "",
    houseNumber: 0,
    city: "",
    postalCode: 0,
    country: "",
  };

  return (
    <>
      <h3>User</h3>
      <div>
        <span>Username: </span>
        <span>{currentUser.username}</span>
      </div>

      <div>
        <span>First name: </span>
        <span>{currentUser.firstName}</span>
      </div>

      <div>
        <span>Last name: </span>
        <span>{currentUser.lastName}</span>
      </div>

      <div>
        <span>Email: </span>
        <span>{currentUser.email}</span>
      </div>

      <div>
        <span>Phone: </span>
        <span>{currentUser.phone}</span>
      </div>

      {currentUser.addressId && (
        <>
          <h3>Address</h3>
          <div>
            <span>Street: </span>
            <span>{address.street}</span>
          </div>

          <div>
            <span>House number: </span>
            <span>{address.houseNumber}</span>
          </div>

          <div>
            <span>City: </span>
            <span>{address.city}</span>
          </div>

          <div>
            <span>Postal code: </span>
            <span>{address.postalCode}</span>
          </div>

          <div>
            <span>Country: </span>
            <span>{address.country}</span>
          </div>
        </>
      )}
    </>
  );
};
