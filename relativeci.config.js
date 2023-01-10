module.exports = {
  // Allow the agent to pick up the current commit message
  includeCommitMessage: true,
  // Save agent payload to disk for debugging
  // @example './relative-ci-payload.json',
  payloadFilepath: undefined,
  webpack: {
    // Path to Webpack stats JSON file
    stats: './dist/webpack-stats.json'
  }
};
