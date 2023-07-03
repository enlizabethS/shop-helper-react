import { useState } from "react";
import { useUpdateCurrentUserMutation, saveCurrentUser } from "entities/User";
import { useAppDispatch, useAppSelector, useAppNavigate } from "shared";

export const MyProfileUserUpdate: React.FC = () => {
  const dispatch = useAppDispatch();
  const [navigate] = useAppNavigate();
  const currentUser = useAppSelector(state => state.users.currentUser);
  const [user, setUser] = useState(currentUser);
  const [updateUser] = useUpdateCurrentUserMutation();

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
      navigate("/my-profile");
    } catch (error) {
      console.log("ERROR updateUser");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          name="firstName"
          value={user.firstName ? user.firstName : ""}
          placeholder="First name"
          onChange={handleChange}
        />
      </label>

      <label>
        <input
          name="lastName"
          value={user.lastName ? user.lastName : ""}
          placeholder="Last name"
          onChange={handleChange}
        />
      </label>

      <label>
        <input
          name="email"
          value={user.email ? user.email : ""}
          placeholder="Email"
          onChange={handleChange}
        />
      </label>

      <label>
        <input
          name="phone"
          value={user.phone ? user.phone : ""}
          placeholder="Phone"
          onChange={handleChange}
        />
      </label>

      <button type="submit">Update</button>
    </form>
  );
};
