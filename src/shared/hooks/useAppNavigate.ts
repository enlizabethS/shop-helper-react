import { useNavigate } from "react-router-dom";

export const useAppNavigate = () => {
  const navigate = useNavigate();

  const handleNavigate = (endpoint: string | number) => {
    navigate(`${endpoint}`);
  };

  return [handleNavigate];
};
