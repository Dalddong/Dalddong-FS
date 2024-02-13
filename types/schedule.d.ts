export interface ScheduleContainerProps {
  sid: string;
}
export type ScheduleItem = {
  day: string;
  times: string[][]; // 빈 배열이라면 어떤 값이 들어올 수 있는지 정확히 알 수 없으므로 any[]로 지정합니다.
  _id: string;
};

export interface ScheduleSummaryType {
  selectDays: ScheduleItem[];
  sid: string;
}

export interface ScheduleIntroType {
  nomineePlayTime: string;
  nomineeDays: string[];
  scheduleName: string;
  schedulePlace: string;
}

export interface ScheduleSelectorType {
  selectDays: ScheduleItem[][];
}

export type selectRecoilDaysType = {
  day: string;
  times: string[];
};
