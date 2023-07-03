import { Link } from "react-router-dom";
import { useAppSelector } from "shared";

import {} from "./MyProfileUser.styled";

export const MyProfileUser: React.FC = () => {
  const currentUser = useAppSelector(state => state.users.currentUser);

  return (
    <>
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

      <Link to={"/my-profile-update"}>Update</Link>
    </>
  );
};
