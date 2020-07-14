const axios = require("axios");
const core = require("@actions/core");
const github = require("@actions/github");
const { tweeterModule } = require("./modules");

async function start() {
  try {
    const tweeterToken = core.getInput("tweeter-token");
    const githubToken = core.getInput("github-token");
    // TODO: Add repo param to let us know location to copy images to

    if (!githubToken) {
      throw new Error("Github token required");
    }

    const tweet = tweeterModule.getLatestTweet();

    const markdown = tweeterModule.convertTweetToMarkdown(tweet);
    console.log(markdown);
    core.setOutput("tweet-markdown", markdown);
  } catch (error) {
    core.setFailed(error.message);
  }
}

module.exports = {
  start,
};
