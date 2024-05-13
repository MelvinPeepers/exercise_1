const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  try {
    const fetch = await import("node-fetch");
    console.time("");
    const response = await fetch.default(
      "https://www.swapi.tech/api/planets/1/"
    );
    console.timeEnd("FETCHTIME");
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
