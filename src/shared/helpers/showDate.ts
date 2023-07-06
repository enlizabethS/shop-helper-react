export const showDate = (date: string) => {
  return `${new Date(date).getDate().toString().padStart(2, "0")}.${new Date(
    date
  )
    .getMonth()
    .toString()
    .padStart(2, "0")}.${new Date(date).getFullYear()}`;
};

export const showTime = (date: string) => {
  return `${new Date(date).getHours()}:${new Date(date).getMinutes()}`;
};
