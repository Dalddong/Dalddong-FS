//@ts-nocheck

import { timeTable } from "../constants/timeTable";
import type { ScheduleItem } from "@/types/schedule";

export const findMostTimeAvailable = (timeBoard: ScheduleItem[]) => {
  const timeBoardMap = new Map();

  for (let i = 0; i < timeBoard.length; i++) {
    for (let j = 0; j < timeBoard[i].times.length; j++) {
      if (timeBoard[i].times[j].length !== 0) {
        const key = timeBoard[i].times[j].length;
        const value = timeBoard[i].day + " " + timeTable[j];

        if (timeBoardMap.has(key)) {
          timeBoardMap.get(key).push(value);
        } else {
          timeBoardMap.set(key, [value]);
        }
      }
    }
  }

  const sortedKeys = [...timeBoardMap.keys()].sort((a, b) => b - a);

  const result = [
    timeBoardMap.get(sortedKeys[0]) || ["1st Data..."],
    timeBoardMap.get(sortedKeys[1]) || ["2nd Data..."],
    timeBoardMap.get(sortedKeys[2]) || ["3rd Data..."],
  ];
  return result;
};
