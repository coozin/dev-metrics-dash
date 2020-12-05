const utilities = {
  coreRequest: {
    method: "POST",
    url: 'https://api.athenian.co/v1/metrics/prs',
    mode: "cors",
    credentials: "omit"
  },
  allRepoGroups: {
    "repositories": [
      "github.com/athenianco/athenian-api",
      "github.com/athenianco/athenian-webapp",
      "github.com/athenianco/infrastructure",
      "github.com/athenianco/metadata",
    ],
    "repogroups": [[0],[1],[2],[3]]
  },
  justRepos: {
    "repositories": [
      "github.com/athenianco/athenian-api",
      "github.com/athenianco/athenian-webapp",
      "github.com/athenianco/infrastructure",
      "github.com/athenianco/metadata",
    ],
  }
}

export default utilities;

