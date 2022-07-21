import fetch from "node-fetch";
const core = require("@actions/core");

try {
  fetch(
    `https://api.render.com/deploy/${core.getInput(
      "render-service-id"
    )}?key=${core.getInput("render-api-key")}`
  ).then((response) => {
    console.log({ response });
  });
} catch (error) {
  core.setFailed(error.message);
}
