// inporting the Node.js built-in https module
const https = require("https");

exports.handler = async (event, context) => {
  const url = "https://www.swapi.tech/api/planets/1/";

  return new Promise((resolve) => {
    https.get(url, (response) => {
      let data = "";
      response.on("data", (chunk) => (data += chunk));
      response.on("end", () => {
        resolve({
          statusCode: 200,
          body: data,
        });
      });
    });
  });
};
