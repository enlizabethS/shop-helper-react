export const fetchImage = (
  imageId: number,
  setImg: React.Dispatch<React.SetStateAction<string>>
) => {
  fetch(`http://localhost:8080/api/images/${imageId}`, {
    method: "GET",
  })
    .then(res => res.blob())
    .then(data => {
      let url = URL.createObjectURL(data);
      setImg(url);
    });
  //   const res = await fetch(`http://localhost:8080/api/images/${imageId}`);
  //   const imageBlob = await res.blob();
  //   const imageObjectURL = URL.createObjectURL(imageBlob);
  //   setImg(imageObjectURL);
};
