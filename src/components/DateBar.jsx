import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppBar, Toolbar } from "@material-ui/core"
import {
  selectStartDate,
  selectEndDate,
  setStartDate,
  setEndDate
} from '../reducers/reviewTimeSlice';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import moment from 'moment';


const DateBar = () => {
  const [errorMessage, setErrorMessage] = useState(false);
  const startDate = useSelector(selectStartDate);
  const endDate = useSelector(selectEndDate);

  const dispatch = useDispatch();

  const isDateRangeValid = (dateArr) => {
    if (!dateArr) {
      return true;
    }

    const momentStart = moment(dateArr[0])
    const momentEnd = moment(dateArr[1])
    const diff = momentEnd.diff(momentStart, 'days')

    console.log("diff", diff)

    if (diff > 93) {
      return false;
    }

    return true;
  }

  const onChange = (newDateArr) => {
    console.log('newDateArr', newDateArr)
    if (!isDateRangeValid(newDateArr)) {
      setErrorMessage('Range selected is too large, 3 month max (93 days)');
      return;
    } else {
      setErrorMessage(false);
    }
    if (newDateArr && newDateArr.length) {
      const newStartDate = moment(newDateArr[0]).format("yyyy-MM-DD")
      const newEndDate = moment(newDateArr[1]).format("yyyy-MM-DD")
      dispatch(setStartDate(newStartDate))
      dispatch(setEndDate(newEndDate))
    } else {
      let thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      const newStartDate = moment(thirtyDaysAgo).format("yyyy-MM-DD")
      const newEndDate = moment(new Date()).format("yyyy-MM-DD")
      dispatch(setStartDate(newStartDate))
      dispatch(setEndDate(newEndDate))
    }
  } 

  return (
    <AppBar position="static">
      <Toolbar>
        <div className="date-container">
          <DateRangePicker
            format="yyyy-MM-dd"
            className="date-picker"
            onChange={onChange}
            value={[startDate, endDate]}
          />
          {errorMessage && 
            <div className="error-message">{errorMessage}</div>
          }
        </div>
      </Toolbar>
    </AppBar>
   
  );
}

export default DateBar;