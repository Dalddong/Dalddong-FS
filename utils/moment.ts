import moment from "moment";

export const changeDateFormat = (day: Date) => {
  return moment(day).format("YY.MM.DD");
};

export const changeDateFormatLongYear = (day: Date) => {
  return moment(day).format("YYYY.MM.DD");
};
