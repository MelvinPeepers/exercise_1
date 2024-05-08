// export async function handler(event, context) {
//   console.time("TIME");

//   // Perform an asynchronous operation (e.g., setTimeout)
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, 1000); // Wait for 1 second
//   });

//   console.timeEnd("TIME");

//   return {
//     statusCode: 200,
//     body: "Netlify SWAPI function executed!",
//   };
// }

const https = require("https");

exports.handler = async function (event, context) {
  return new Promise((resolve, reject) => {
    const url = "https://www.swapi.tech/api/planets/1/";

    https
      .get(url, (res) => {
        let data = "";

        // A chunk of data has been received.
        res.on("data", (chunk) => {
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        res.on("end", () => {
          try {
            const parsedData = JSON.parse(data);
            resolve({
              statusCode: 200,
              body: JSON.stringify(parsedData),
            });
          } catch (e) {
            reject({
              statusCode: 500,
              body: "Failed to parse response",
            });
          }
        });
      })
      .on("error", (err) => {
        console.error("Error: " + err.message);
        reject({
          statusCode: 500,
          body: "Failed to fetch data",
        });
      });
  });
};
