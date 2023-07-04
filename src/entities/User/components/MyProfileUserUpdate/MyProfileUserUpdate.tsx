import { useState } from "react";
import { useUpdateCurrentUserMutation, saveCurrentUser } from "entities/User";
import { useAppDispatch, useAppSelector, Spinner } from "shared";

import { Form, UpdateButton } from "./MyProfileUserUpdate.styled";

interface IMyProfileUserUpdate {
  handleUserUpdate: () => void;
}

export const MyProfileUserUpdate: React.FC<IMyProfileUserUpdate> = ({
  handleUserUpdate,
}) => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(state => state.users.currentUser);
  const [user, setUser] = useState(currentUser);
  const [updateUser, { isLoading }] = useUpdateCurrentUserMutation();

  const handleChange = ({
    target: { name, value },
  }: {
    target: { name: string; value: string };
  }) => setUser(prev => ({ ...prev, [name]: value }));

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    try {
      const updatedUser = await updateUser(user).unwrap();
      dispatch(saveCurrentUser(updatedUser));
      handleUserUpdate();
    } catch (error) {
      console.log("ERROR updateUser");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        First name
        <input
          name="firstName"
          value={user.firstName ? user.firstName : ""}
          placeholder="First name"
          onChange={handleChange}
        />
      </label>

      <label>
        Last name
        <input
          name="lastName"
          value={user.lastName ? user.lastName : ""}
          placeholder="Last name"
          onChange={handleChange}
        />
      </label>

      <label>
        Email
        <input
          name="email"
          value={user.email ? user.email : ""}
          placeholder="Email"
          onChange={handleChange}
        />
      </label>

      <label>
        Phone
        <input
          name="phone"
          value={user.phone ? user.phone : ""}
          placeholder="Phone"
          onChange={handleChange}
        />
      </label>

      <UpdateButton type="submit">
        {isLoading ? <Spinner /> : "Update"}
      </UpdateButton>
    </Form>
  );
};
