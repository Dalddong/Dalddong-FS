import moment from "moment";

export const changeDateFormat = (day: Date) => {
  return moment(day).format("YY.MM.DD");
};
