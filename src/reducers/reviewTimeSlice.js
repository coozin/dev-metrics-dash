import getDefault from '../apis/index';
import axios from 'axios';

const initialState = {
  data: null,
}

export default function reviewTimeReducer(state = initialState, action) {
  switch (action.type) {
    // omit other reducer cases
    case 'fetchDefaultData': {
      // Replace the existing state entirely by returning the new value
      console.log("*J* action.payload", action.payload)
      state.data = action.payload
      break;
    }
    default:
      return state
  }
}

export const fetchDataAsync = () => async dispatch => {
  
  axios({
    method: "POST",
    url: 'https://api.athenian.co/v1/metrics/prs',
    data: JSON.stringify({
      "for":[
        {"repositories":["github.com/athenianco/athenian-api",
                         "github.com/athenianco/athenian-webapp",
                         "github.com/athenianco/infrastructure",
                         "github.com/athenianco/metadata"]}
      ],
      "metrics":["pr-review-time","pr-opened"],
      "date_from":"2020-06-01",
      "date_to":"2020-09-01",
      "granularities":["day"],
      "exclude_inactive":true,
      "account":1,
      "timezone":60
    }),
    mode: "cors",
    credentials: "omit"
  }).then((response) => 
    dispatch({ type: 'fetchDefaultData', payload: response.data })
  )
}

export const selectData = state => state.data;
