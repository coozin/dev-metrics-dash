import axios from 'axios';
import coreRequest from '../utils/coreRequest';

const initialState = {
  lineData: null,
  barData: null,
  error: null,
  startDate: "2020-06-01",
  endDate: "2020-09-01",
}

export default function reviewTimeReducer(state = initialState, action) {
  switch (action.type) {
    case 'fetchDataSuccess-pr-review-time': {
      state.lineData = action.payload;
      break;
    }
    case 'fetchDataSuccess-pr-opened': {
      state.barData = action.payload;
      break;
    }
    case 'fetchDataFail': {
      state.err = action.payload;
      break;
    }
    case 'setStartDate': {
      state.startDate = action.payload;
      break;
    }
    case 'setEndDate': {
      state.endDate = action.payload;
      break;
    }
    default:
      return state
  }
}

export const setStartDate = (newDate) => dispatch => {
  console.log('setStartDate newDate', newDate)
  dispatch({ type: 'setStartDate', payload: newDate.format("yyyy-MM-DD") })
}

export const setEndDate = (newDate) => dispatch => {
  console.log('setEndDate newDate', newDate)
  dispatch({ type: 'setEndDate', payload: newDate.format("yyyy-MM-DD") })
}

export const fetchDataAsync = (metrics, startDate, endDate) => async dispatch => {
  axios({
    ...coreRequest,
    data: JSON.stringify({
      "for":[
        {"repositories":["github.com/athenianco/athenian-api",
                         "github.com/athenianco/athenian-webapp",
                         "github.com/athenianco/infrastructure",
                         "github.com/athenianco/metadata"]}
      ],
      "metrics":[...metrics],
      "date_from": startDate,
      "date_to": endDate,
      "granularities":["day"],
      "exclude_inactive":true,
      "account":1,
      "timezone":60
    }),
    
  })
    .then((response) => 
      dispatch({ type: `fetchDataSuccess-${metrics[0]}`, payload: response.data })
    )
    .catch((err) =>
      dispatch({ type: 'fetchDataFail', payload: err })
    )
}

export const selectLineData = state => state.lineData;
export const selectBarData = state => state.barData;
export const selectStartDate = state => state.startDate;
export const selectEndDate = state => state.endDate;
