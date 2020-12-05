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
      setErrorMessage('range selected is too large, 3 month max (93 days)');
      return;
    } else {
      setErrorMessage(false);
    }
    if (newDateArr && newDateArr.length) {
      dispatch(setStartDate(newDateArr[0]))
      dispatch(setEndDate(newDateArr[1]))
    } else {
      let thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      dispatch(setStartDate(thirtyDaysAgo))
      dispatch(setEndDate(new Date()))
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