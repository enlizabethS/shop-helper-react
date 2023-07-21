import placeHolder from "images/placeholder.png";

import { IMG } from "./PlaceHolder.styled";

interface IPlaceHolder {
  size: "preview" | "image";
}

export const PlaceHolder: React.FC<IPlaceHolder> = ({ size }) => {
  return (
    <>
      {size === "preview" && (
        <IMG
          src={placeHolder}
          style={{ width: "75px", height: "75px" }}
          alt="place holder"
        />
      )}
      {size === "image" && (
        <IMG
          src={placeHolder}
          style={{ width: "500px", height: "500px" }}
          alt="place holder"
        />
      )}
    </>
  );
};
