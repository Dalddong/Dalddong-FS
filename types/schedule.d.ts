export interface ScheduleContainerProps {
  sid: string;
}

export interface ScheduleSummaryType {
  selectDays: any;
  sid: string;
}

export interface ScheduleIntroType {
  nomineePlayTime: string;
  nomineeDays: string[];
  scheduleName: string;
  schedulePlace: string;
}

export interface ScheduleSelectorType {
  selectDays: any[];
}

export type selectRecoilDaysType = {
  day: string;
  times: string[];
};

export type visibleItemsType = {
  _id: string;
  day: string;
  times: string[];
};
