export interface ScheduleContainerProps {
  sid: string;
}

type selectDaysType = {
  day: string;
  times: [][];
};

export interface ScheduleSummaryType {
  selectDays: selectDaysType[];
  sid: string;
}

export interface ScheduleIntroType {
  nomineePlayTime: string;
  nomineeDays: string[];
  scheduleName: string;
  schedulePlace: string;
}

export interface ScheduleSelectorType {
  selectDays: selectDaysType[];
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
