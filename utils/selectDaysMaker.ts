import { eachDayOfInterval, format } from "date-fns";

export const selectDaysMaker = (filteredDateRange: Date[]) => {
  if (filteredDateRange[1] !== null) {
    const dateRange = eachDayOfInterval({
      start: filteredDateRange[0],
      end: filteredDateRange[1],
    }).map((date) => format(date, "MM/dd"));
    const times = Array.from({ length: 24 }, () => []);

    const result = dateRange.map((day) => {
      return {
        day: day,
        times: times,
      };
    });

    return result;
  }
};
