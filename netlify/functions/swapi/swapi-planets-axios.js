const axios = require("axios");

exports.handler = async (event, context) => {
  const API_ENDPOINT = "https://www.swapi.tech/api/planets/1/";

  try {
    const response = await axios.get(API_ENDPOINT);
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
