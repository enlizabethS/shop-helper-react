import { useState } from "react";
import {
  MyProfileUser,
  MyProfileUserUpdate,
  MyProfileAddress,
  MyProfileAddressUpdate,
} from "entities/User";

import {
  Title,
  MyProfConteiner,
  TextProfile,
  AdressCount
} from "./MyProfile.styled";

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
    
    <MyProfConteiner>
      <Title>Your profile</Title>

      <TextProfile>You can view or change information about yourself</TextProfile>
      {showData ? (
        <MyProfileUser handleUserUpdate={handleUserUpdate} />
      ) : (
        <MyProfileUserUpdate handleUserUpdate={handleUserUpdate} />
      )}

      <AdressCount>Address</AdressCount>

      {showAddress ? (
        <MyProfileAddress handleAddressUpdate={handleAddressUpdate} />
      ) : (
        <MyProfileAddressUpdate handleAddressUpdate={handleAddressUpdate} />
      )}
    </MyProfConteiner>
  );
};
