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
  nomineeDays: any;
  scheduleName: string;
  schedulePlace: string;
}

export interface ScheduleSelectorType {
  selectDays: selectDaysType[];
}
