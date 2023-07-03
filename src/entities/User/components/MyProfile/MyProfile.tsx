import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useFetchAddressQuery, saveAddress } from "entities/User";
import { useAppDispatch, useAppSelector } from "shared";

import { Title } from "./MyProfile.styled";

export const MyProfile: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(state => state.users.currentUser);
  const { data } = useFetchAddressQuery(currentUser.addressId, {
    skip: currentUser.addressId === null,
  });
  const address = useAppSelector(state => state.users.address);

  useEffect(() => {
    if (data !== undefined) {
      dispatch(saveAddress(data));
    }
  }, [dispatch, data]);

  return (
    <>
      <Title>User</Title>
      <Outlet />

      {currentUser.addressId && (
        <>
          <Title>Address</Title>
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
