import { useState } from "react";
import {
  useUpdateAddressMutation,
  useAddAddressMutation,
  saveAddress,
} from "entities/User";
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
  const [updateAddress, { isLoading: isLoadingUpdate }] =
    useUpdateAddressMutation();
  const [addAddress, { isLoading: isLoadingAdd }] = useAddAddressMutation();
  const address = useAppSelector(state => state.users.address);
  const [addressState, setAddressState] = useState(address);

  const handleChange = ({
    target: { name, value },
  }: {
    target: { name: string; value: string };
  }) => setAddressState(prev => ({ ...prev, [name]: value }));

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    try {
      let newAddress;

      if (address.id) {
        newAddress = await updateAddress(addressState).unwrap();
      } else {
        newAddress = await addAddress(addressState).unwrap();
      }

      dispatch(saveAddress(newAddress));
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
            value={addressState.street ? addressState.street : ""}
            placeholder="Street"
            onChange={handleChange}
            required
          />
        </Label>

        <Label>
          House number:
          <Input
            name="houseNumber"
            value={addressState.houseNumber ? addressState.houseNumber : ""}
            placeholder="House number"
            onChange={handleChange}
            required
          />
        </Label>

        <Label>
          City:
          <Input
            name="city"
            value={addressState.city ? addressState.city : ""}
            placeholder="City"
            onChange={handleChange}
            required
          />
        </Label>

        <Label>
          Postal code:
          <Input
            name="postalCode"
            value={addressState.postalCode ? addressState.postalCode : ""}
            placeholder="Postal code"
            onChange={handleChange}
            required
          />
        </Label>

        <Label>
          Country:
          <Input
            name="country"
            value={addressState.country ? addressState.country : ""}
            placeholder="Country"
            onChange={handleChange}
            required
          />
        </Label>
      </FieldsBlock>

      <ButtonsBlock>
        <Button type="submit">
          {address.id ? (
            isLoadingUpdate ? (
              <Spinner />
            ) : (
              "Update"
            )
          ) : isLoadingAdd ? (
            <Spinner />
          ) : (
            "Add address"
          )}
        </Button>
        <Button type="button" onClick={() => handleAddressUpdate()}>
          Cancel
        </Button>
      </ButtonsBlock>
    </Form>
  );
};
