export type ScheduleContainerProps = {
  sid: string;
};
export type ScheduleItem = {
  day: string;
  times: string[][];
  _id: string;
};

export type ScheduleSummaryType = {
  selectDays: ScheduleItem[];
  sid: string;
};

export type ScheduleIntroType = {
  nomineePlayTime: string;
  nomineeDays: string[];
  scheduleName: string;
  schedulePlace: string;
};

export type ScheduleSelectorType = {
  selectDays: ScheduleItem[][];
};

export type selectRecoilDaysType = {
  day: string;
  times: string[];
};
