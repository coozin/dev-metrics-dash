import axios from 'axios';

const getDefault = () => {
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
  })
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}

export default getDefault;