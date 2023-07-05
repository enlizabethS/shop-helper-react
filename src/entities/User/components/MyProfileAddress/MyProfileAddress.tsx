import { useAppSelector } from "shared";

import {
  Block,
  AdressNotAddCount,
  FieldsBlock,
  Field,
  FieldName,
  FieldValue,
  Button,
} from "./MyProfileAddress.styled";

interface IMyProfileAddress {
  handleAddressUpdate: React.MouseEventHandler<HTMLButtonElement>;
}

export const MyProfileAddress: React.FC<IMyProfileAddress> = ({
  handleAddressUpdate,
}) => {
  const address = useAppSelector(state => state.users.address);

  return (
    <Block>
      {!address.id ? (
        <AdressNotAddCount>Address not added</AdressNotAddCount>
      ) : (
        <>
          <FieldsBlock>
            <Field>
              <FieldName>Street:</FieldName>
              <FieldValue>{address.street}</FieldValue>
            </Field>

            <Field>
              <FieldName>House number:</FieldName>
              <FieldValue>{address.houseNumber}</FieldValue>
            </Field>

            <Field>
              <FieldName>City:</FieldName>
              <FieldValue>{address.city}</FieldValue>
            </Field>

            <Field>
              <FieldName>Postal code:</FieldName>
              <FieldValue>{address.postalCode}</FieldValue>
            </Field>

            <Field>
              <FieldName>Country:</FieldName>
              <FieldValue>{address.country}</FieldValue>
            </Field>
          </FieldsBlock>
        </>
      )}

      <Button type="button" onClick={handleAddressUpdate}>
        {address.id ? "Update" : "Add address"}
      </Button>
    </Block>
  );
};
