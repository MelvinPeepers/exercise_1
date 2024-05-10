const fetch = require("node-fetch");

// exports.handler = async function (event, context) {
//   try {
//     const response = await fetch("https://www.swapi.tech/api/planets/1/");
//     const data = await response.json();
//     return {
//       statusCode: 200,
//       body: JSON.stringify(data),
//     };
//   } catch (err) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: err.message }),
//     };
//   }
// };

exports.handler = async (event, context) => {
  const API_ENDPOINT = "https://www.swapi.tech/api/planets/1/";

  try {
    const response = await fetch(API_ENDPOINT);
    const data = response.data;
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An error occurred" }),
    };
  }
};
