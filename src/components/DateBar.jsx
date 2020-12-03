import React, { useState } from 'react';
import { DatePicker } from "@material-ui/pickers";

const DateBar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="date-container">
      <DatePicker
        variant="inline"
        inputVariant="outlined"
        label="Start Date"
        value={startDate}
        onChange={setStartDate}
        animateYearScrolling
        disableFuture
        format="DD/MM/yyyy"
      />
      <DatePicker
        variant="inline"
        inputVariant="outlined"
        label="End Date"
        value={endDate}
        onChange={setEndDate}
        animateYearScrolling
        disableFuture
        format="DD/MM/yyyy"
      />
    </div>
  );
}

export default DateBar;