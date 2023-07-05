import { useAppSelector } from "shared";

import {
  Block,
  FieldsBlock,
  Field,
  FieldName,
  FieldValue,
  Button,
} from "./MyProfileUser.styled";

interface IMyProfileUserOrigin {
  handleUserUpdate: React.MouseEventHandler<HTMLButtonElement>;
}

export const MyProfileUser: React.FC<IMyProfileUserOrigin> = ({
  handleUserUpdate,
}) => {
  const currentUser = useAppSelector(state => state.users.currentUser);

  return (
    <Block>
      <FieldsBlock>
        <Field>
          <FieldName>Username:</FieldName>
          <FieldValue>{currentUser.username}</FieldValue>
        </Field>

        <Field>
          <FieldName>First name:</FieldName>
          <FieldValue>{currentUser.firstName}</FieldValue>
        </Field>

        <Field>
          <FieldName>Last name:</FieldName>
          <FieldValue>{currentUser.lastName}</FieldValue>
        </Field>

        <Field>
          <FieldName>Email:</FieldName>
          <FieldValue>{currentUser.email}</FieldValue>
        </Field>

        <Field>
          <FieldName>Phone:</FieldName>
          <FieldValue>{currentUser.phone}</FieldValue>
        </Field>
      </FieldsBlock>

      <Button type="button" onClick={handleUserUpdate}>
        Update
      </Button>
    </Block>
  );
};
