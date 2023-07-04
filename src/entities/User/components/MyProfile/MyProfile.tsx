import { useState } from "react";
import {
  MyProfileUser,
  MyProfileUserUpdate,
  MyProfileAddress,
  MyProfileAddressUpdate,
} from "entities/User";

import {} from "./MyProfile.styled";

export const MyProfile: React.FC = () => {
  const [showData, setShowData] = useState(true);
  const [showAddress, setShowAddress] = useState(true);

  const handleUserUpdate = () => {
    setShowData(!showData);
  };

  const handleAddressUpdate = () => {
    setShowAddress(!showAddress);
  };

  return (
    <>
      <h3>User</h3>

      {showData ? (
        <MyProfileUser handleUserUpdate={handleUserUpdate} />
      ) : (
        <MyProfileUserUpdate handleUserUpdate={handleUserUpdate} />
      )}

      <h3>Address</h3>

      {showAddress ? (
        <MyProfileAddress handleAddressUpdate={handleAddressUpdate} />
      ) : (
        <MyProfileAddressUpdate handleAddressUpdate={handleAddressUpdate} />
      )}
    </>
  );
};
