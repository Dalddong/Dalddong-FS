import SVG_down from "@/public/svgs/down.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";
import ko from "date-fns/locale/ko";

import { useRecoilState } from "recoil";
import { nomineeDayValue } from "@/states/Schedule/atom";

const DayPicker = () => {
  const [dateRange, setDateRange] = useRecoilState<Date[]>(nomineeDayValue);
  const [startDate, endDate] = dateRange;

  return (
    <div className="form-layout card-layout-rounded-full centered-content justify-evenly">
      <span className="form-input-width">기간</span>

      <div className="centered-content w-[270px]">
        <SVG_down />
        <DatePicker
          className="w-[250px] text-center"
          dateFormat="yyyy.MM.dd"
          selectsRange={true}
          minDate={new Date()}
          maxDate={addDays(new Date(), 14)}
          startDate={startDate}
          endDate={endDate}
          locale={ko}
          onChange={(update: [Date, Date]) => {
            if (update) {
              setDateRange(update);
            }
          }}
          isClearable={false}
        />
      </div>
    </div>
  );
};

export default DayPicker;
