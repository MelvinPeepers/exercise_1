import axios from "axios";

export async function handler(event, context) {
  const API_ENDPOINT = "https://www.swapi.tech/api/planets/1/";
  try {
    console.time("AXIOSTIME");
    const response = await axios.get(API_ENDPOINT);
    console.timeEnd("AXIOSTIME");
    const data = response.data;
    const name = data.result.properties.name;
    return {
      statusCode: 200,
      body: name,
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An error occurred" }),
    };
  }
}
