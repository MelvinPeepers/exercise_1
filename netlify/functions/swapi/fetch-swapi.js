const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  try {
    const fetch = await import("node-fetch");
    console.time("FETCHTIME");
    const response = await fetch.default("https://www.swapi.tech/api/planets/");
    console.timeEnd("FETCHTIME");
    const data = await response.json();
    const name = data.result.properties.name;
    return {
      statusCode: 200,
      body: JSON.stringify({ name }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};