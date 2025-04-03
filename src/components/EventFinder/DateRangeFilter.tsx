import React from "react";
import { DatePicker } from "antd";
import { Dayjs } from "dayjs";
const { RangePicker } = DatePicker;

interface DateRangeFilterProps {
  dateRange: [Dayjs | null, Dayjs | null];
  setDateRange: (range: [Dayjs | null, Dayjs | null]) => void;
}

const DateRangeFilter: React.FC<DateRangeFilterProps> = ({ dateRange, setDateRange }) => {
  return (
    <div className="mb-4">
      <RangePicker
        value={dateRange}
        onChange={(dates) => setDateRange(dates || [null, null])}
        className="w-full"
        placeholder={["Start Date", "End Date"]}
      />
    </div>
  );
};

export default DateRangeFilter;