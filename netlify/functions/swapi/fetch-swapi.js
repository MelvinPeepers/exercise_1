const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  try {
    console.time("FETCHTIME");
    const response = await fetch("https://www.swapi.tech/api/planets/1");
    console.timeEnd("FETCHTIME");
    const data = await response.json();

    const name = data.name;
    return {
      statusCode: 200,
      body: JSON.stringify(name),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
