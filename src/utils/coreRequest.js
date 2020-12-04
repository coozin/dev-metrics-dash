const utilities = {
  coreRequest: {
    method: "POST",
    url: 'https://api.athenian.co/v1/metrics/prs',
    mode: "cors",
    credentials: "omit"
  },
  allRepoGroups: {
    "repositories": [
      "github.com/athenianco/athenian-webapp",
      "github.com/athenianco/athenian-api",
      "github.com/athenianco/environments",
      "github.com/athenianco/helm-repo",
      "github.com/athenianco/infrastructure",
      "github.com/athenianco/metadata",
      "github.com/athenianco/precomputer"
    ],
    "repogroups": [[0],[1],[2],[3],[4],[5],[6]]
  },
  justRepos: {
    "repositories": [
      "github.com/athenianco/athenian-webapp",
      "github.com/athenianco/athenian-api",
      "github.com/athenianco/environments",
      "github.com/athenianco/helm-repo",
      "github.com/athenianco/infrastructure",
      "github.com/athenianco/metadata",
      "github.com/athenianco/precomputer"
    ],
  }
}

export default utilities;

