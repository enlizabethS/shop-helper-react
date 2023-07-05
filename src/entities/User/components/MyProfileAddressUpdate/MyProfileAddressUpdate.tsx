import { useState } from "react";
import { useUpdateAddressMutation, saveAddress } from "entities/User";
import { useAppDispatch, useAppSelector, Spinner } from "shared";

import {
  Form,
  FieldsBlock,
  Label,
  Input,
  ButtonsBlock,
  Button,
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
      <FieldsBlock>
        <Label>
          Street:
          <Input
            name="street"
            value={newAddress.street ? newAddress.street : ""}
            placeholder="Street"
            onChange={handleChange}
          />
        </Label>

        <Label>
          House number:
          <Input
            name="houseNumber"
            value={newAddress.houseNumber ? newAddress.houseNumber : ""}
            placeholder="House number"
            onChange={handleChange}
          />
        </Label>

        <Label>
          City:
          <Input
            name="city"
            value={newAddress.city ? newAddress.city : ""}
            placeholder="City"
            onChange={handleChange}
          />
        </Label>

        <Label>
          Postal code:
          <Input
            name="postalCode"
            value={newAddress.postalCode ? newAddress.postalCode : ""}
            placeholder="Postal code"
            onChange={handleChange}
          />
        </Label>

        <Label>
          Country:
          <Input
            name="country"
            value={newAddress.country ? newAddress.country : ""}
            placeholder="Country"
            onChange={handleChange}
          />
        </Label>
      </FieldsBlock>

      <ButtonsBlock>
        <Button type="submit">{isLoading ? <Spinner /> : "Update"}</Button>
        <Button type="button" onClick={() => handleAddressUpdate()}>
          Cancel
        </Button>
      </ButtonsBlock>
    </Form>
  );
};
