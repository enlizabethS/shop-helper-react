import { useState } from "react";
import { useUpdateAddressMutation, saveAddress } from "entities/User";
import { useAppDispatch, useAppSelector, Spinner } from "shared";

import { 
  Form, 
  UpdateButton, 
  AdressUpDStreet,
  AdressUpDStreetInput,
  AdressUpDHouseN,
  AdressUpDHouseNInput,
  AdressUpDCity,
  AdressUpDCityInput,
  AdressUpDPostC,
  AdressUpDPostCInput,
  AdressUpDCountry,
  AdressUpDCountryInput
} from "./MyProfileAddressUpdate.styled";

interface IMyProfileAddressUpdate {
  handleAddressUpdate: () => void;
}

export const MyProfileAddressUpdate: React.FC<IMyProfileAddressUpdate> = ({
  handleAddressUpdate,
}) => {
  const dispatch = useAppDispatch();
  const [updateAddress, { isLoading }] = useUpdateAddressMutation();
  const address = useAppSelector(state => state.users.address);
  const [newAddress, setNewAddress] = useState(address);

  const handleChange = ({
    target: { name, value },
  }: {
    target: { name: string; value: string };
  }) => setNewAddress(prev => ({ ...prev, [name]: value }));

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    try {
      const updatedAddress = await updateAddress(newAddress).unwrap();
      dispatch(saveAddress(updatedAddress));
      handleAddressUpdate();
    } catch (error) {
      console.log("ERROR updateAddress");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <AdressUpDStreet>
        Street
        <AdressUpDStreetInput 
          name="street"
          value={newAddress.street ? newAddress.street : ""}
          placeholder="Street"
          onChange={handleChange}
        />
      </AdressUpDStreet>

      <AdressUpDHouseN >
        House number
        <AdressUpDHouseNInput
          name="houseNumber"
          value={newAddress.houseNumber ? newAddress.houseNumber : ""}
          placeholder="House number"
          onChange={handleChange}
        />
      </AdressUpDHouseN>

      <AdressUpDCity>
        City
        <AdressUpDCityInput
          name="city"
          value={newAddress.city ? newAddress.city : ""}
          placeholder="City"
          onChange={handleChange}
        />
      </AdressUpDCity>

      <AdressUpDPostC >
        Postal code
        <AdressUpDPostCInput
          name="postalCode"
          value={newAddress.postalCode ? newAddress.postalCode : ""}
          placeholder="Postal code"
          onChange={handleChange}
        />
      </AdressUpDPostC>

      <AdressUpDCountry>
        Country
        <AdressUpDCountryInput
          name="country"
          value={newAddress.country ? newAddress.country : ""}
          placeholder="Country"
          onChange={handleChange}
        />
      </AdressUpDCountry>

      <UpdateButton type="submit">
        {isLoading ? <Spinner /> : "Update"}
      </UpdateButton>
    </Form>
  );
};
