import { useState } from "react";

export const useFetchImageById = () => {
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleFetchImage = (imageId: number) => {
    fetch(`http://localhost:8080/api/images/${imageId}`, {
      method: "GET",
    })
      .then(res => res.blob())
      .then(data => {
        let url = URL.createObjectURL(data);
        setImageUrl(url);
      });
  };

  return { imageUrl, handleFetchImage };
};
