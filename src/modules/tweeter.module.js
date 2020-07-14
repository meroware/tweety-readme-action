/**
 * Get's latest tweet by hitting tweeter api
 */
async function getLatestTweet() {
  return {
    created_at: "Wed Oct 10 20:19:24 +0000 2018",
    id: 1050118621198921728,
    id_str: "1050118621198921728",
    text: "Sample tweeter call for tweety readme action",
    user: {},
    entities: {},
  };
}

/**
 * Converts
 * tweet to markdown
 * @param {object} tweet
 */
function convertTweetToMarkdown(tweet) {
  return `<div style="width: 400px; height: 200px; border: solid 1px; border-radius: 50px">
    <div style="padding: 50px 30px">
    <img src="./tweeter.png" height=25>
    <span style="">${tweet.text}</span>
    </br>
    <span style="font-size: 10px; text-decoration: none;">${tweet.created_at}</span>
    </div>
    </div>`;
}

module.exports = {
  getLatestTweet,
  convertTweetToMarkdown,
};
