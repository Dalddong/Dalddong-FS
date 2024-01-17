//@ts-nocheck

import { timeTable } from "./timeTable";

export const findMostTimeAvailable = (a: any) => {
  const result3 = new Map();

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].times.length; j++) {
      if (a[i].times[j].length !== 0) {
        result3.get(a[i].times[j].length)
          ? result3
              .get(a[i].times[j].length)
              .push(a[i].day + " " + timeTable[j])
          : result3.set(a[i].times[j].length, [a[i].day + " " + timeTable[j]]);
      }
    }
  }

  const sortedKeys = [...result3.keys()].sort((a, b) => b - a);

  const result = [
    result3.get(sortedKeys[0]),
    result3.get(sortedKeys[1]),
    result3.get(sortedKeys[2]),
  ];
  return result;
};
