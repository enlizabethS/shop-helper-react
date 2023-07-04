import { useAppSelector } from "shared";

import { 
  AddressBlock, 
  UpdateButton,
  AdressNotAddCount
} from "./MyProfileAddress.styled";

interface IMyProfileAddress {
  handleAddressUpdate: React.MouseEventHandler<HTMLButtonElement>;
}

export const MyProfileAddress: React.FC<IMyProfileAddress> = ({
  handleAddressUpdate,
}) => {
  const address = useAppSelector(state => state.users.address);

  return (
    <>
      {!address.id ? (
        <AdressNotAddCount>Address not added</AdressNotAddCount>
      ) : (
        <AddressBlock>
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
        </AddressBlock>
      )}

      <UpdateButton type="button" onClick={handleAddressUpdate}>
        UpdateAddress
      </UpdateButton>
    </>
  );
};
