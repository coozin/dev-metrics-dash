import axios from 'axios';

const initialState = {
  data: null,
  error: null,
}

export default function reviewTimeReducer(state = initialState, action) {
  switch (action.type) {
    case 'fetchDefaultDataSuccess': {
      state.data = action.payload
      break;
    }
    case 'fetchDefaultDataFail': {
      state.err = action.payload
      break;
    }
    default:
      return state
  }
}
// metrics = ["pr-review-time"]

export const fetchDataAsync = (metrics) => async dispatch => {
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
      "metrics":[...metrics],
      "date_from":"2020-06-01",
      "date_to":"2020-09-01",
      "granularities":["day"],
      "exclude_inactive":true,
      "account":1,
      "timezone":60
    }),
    mode: "cors",
    credentials: "omit"
  })
    .then((response) => 
      dispatch({ type: 'fetchDefaultDataSuccess', payload: response.data })
    )
    .catch((err) =>
      dispatch({ type: 'fetchDefaultDataFail', payload: err })
    )
}

export const selectData = state => state.data;
