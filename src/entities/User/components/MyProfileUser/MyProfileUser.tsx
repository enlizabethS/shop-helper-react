import { useAppSelector } from "shared";

import { UserBlock, UpdateButton } from "./MyProfileUser.styled";

interface IMyProfileUserOrigin {
  handleUserUpdate: React.MouseEventHandler<HTMLButtonElement>;
}

export const MyProfileUser: React.FC<IMyProfileUserOrigin> = ({
  handleUserUpdate,
}) => {
  const currentUser = useAppSelector(state => state.users.currentUser);

  return (
    <UserBlock>
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

      <UpdateButton type="button" onClick={handleUserUpdate}>
        UpdateUser
      </UpdateButton>
    </UserBlock>
  );
};
