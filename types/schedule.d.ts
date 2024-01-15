export interface ScheduleSummaryType {
  selectDays: object[];
  isLoading: boolean;
  sid: string;
}

export interface ScheduleContainerProps {
  sid: string;
}
export interface ScheduleIntroType {
  nomineePlayTime: string;
  nomineeDays: any;
  scheduleName: string;
  schedulePlace: string;
  isLoading: boolean;
}

export interface ScheduleSelectorType {
  selectDays: any;
}
