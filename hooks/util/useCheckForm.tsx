import {
  nomineeDayValue,
  nomineePlayTimeValue,
  scheduleNameValue,
  schedulePlaceValue,
} from "@/states/Schedule/atom";
import { useRecoilValue } from "recoil";
import { changeDateFormat } from "@/utils/functions/moment";
import { selectDaysMaker } from "@/utils/functions/selectDaysMaker";
import {
  UNFILLED_FORM,
  TOO_LONGNAME_FORM,
  TOO_LONGPLACE_FORM,
} from "@/utils/constants/alertMessages";

const useCheckForm = ({ dateRange }: any) => {
  const scheduleName = useRecoilValue(scheduleNameValue);
  const schedulePlace = useRecoilValue(schedulePlaceValue);
  const nomineePlaytime = useRecoilValue(nomineePlayTimeValue);
  const filterDateRange = dateRange.map((item: any) => changeDateFormat(item));
  const selectDays = selectDaysMaker(dateRange);

  let formStatus: string | boolean = "";

  if (scheduleName.length > 8) {
    formStatus = TOO_LONGNAME_FORM;
  } else if (schedulePlace.length > 10) {
    formStatus = TOO_LONGPLACE_FORM;
  } else if (
    scheduleName &&
    schedulePlace &&
    filterDateRange[1] !== "Invalid date"
  ) {
    formStatus = true;
  } else {
    formStatus = UNFILLED_FORM;
  }

  const a =
    scheduleName && schedulePlace && filterDateRange[1] !== "Invalid date";
  console.log(a, "a값");

  return {
    scheduleName,
    schedulePlace,
    nomineePlaytime,
    filterDateRange,
    selectDays,
    formStatus,
  };
};

export default useCheckForm;
