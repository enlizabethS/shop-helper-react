import { useAppSelector } from "shared";

import { 
  UserBlock, 
  UpdateButton,
  UserNameCount,
  FirstNameCount,
  LastNameCount,
  EmailNameCount,
  PhoneNameCount
 } from "./MyProfileUser.styled";

interface IMyProfileUserOrigin {
  handleUserUpdate: React.MouseEventHandler<HTMLButtonElement>;
}

export const MyProfileUser: React.FC<IMyProfileUserOrigin> = ({
  handleUserUpdate,
}) => {
  const currentUser = useAppSelector(state => state.users.currentUser);

  return (
    <UserBlock>
      <UserNameCount>
        <span>Username: </span>
        <span>{currentUser.username}</span>
      </UserNameCount>

      <FirstNameCount>
        <span>First name: </span>
        <span>{currentUser.firstName}</span>
      </FirstNameCount>

      <LastNameCount>
        <span>Last name: </span>
        <span>{currentUser.lastName}</span>
      </LastNameCount>

      <EmailNameCount>
        <span>Email: </span>
        <span>{currentUser.email}</span>
      </EmailNameCount>

      <PhoneNameCount>
        <span>Phone: </span>
        <span>{currentUser.phone}</span>
      </PhoneNameCount>

      <UpdateButton type="button" onClick={handleUserUpdate}>
        UpdateUser
      </UpdateButton>
      
    </UserBlock>
  );
};
