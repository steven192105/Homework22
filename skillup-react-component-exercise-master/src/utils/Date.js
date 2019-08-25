export const formatDate = date => {
  let innerDate = date;
  if (typeof date !== "object") {
    innerDate = new Date(date);
  }
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const month = months[innerDate.getMonth()];
  const year = innerDate.getFullYear();
  const day = innerDate.getDate();
  const hour = innerDate.getHours();
  const minutes = innerDate.getMinutes();

  return `${day} ${month} ${year}, ${hour}:${minutes}`;
};
