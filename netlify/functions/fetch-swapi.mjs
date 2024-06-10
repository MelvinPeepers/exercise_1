// Import the 'node-fetch' module for making HTTP requests
import fetch from "node-fetch";

// Define the Netlify Function handler
// removed event, context cause they aren't read
export async function handler(event, context) {
  const { planetId } = event.path.split("/").pop();
  try {
    // starts the timer to measure the fetch duration
    console.time("FETCHTIME");

    // Make a GET request to the SWAPI to fetch the data for planet with ID 1
    const response = await fetch(
      `https://www.swapi.tech/api/planets/${planetId}`
    );

    // End the timer and log the fetch duration
    console.timeEnd("FETCHTIME");

    // Parse the JSON response body
    const data = await response.json();

    // // Extract the 'name' property from the fetched data
    // const name = data.result.properties.name;

    // Return a successful response with the planet name as the body
    return {
      statusCode: 200, // HTTP status code 200 indicates success
      body: JSON.stringify(data), // Response body contains the planet name
    };
  } catch (err) {
    // Catch and handle any errors that occur during the try block

    // Return an error response with the error message
    return {
      statusCode: 500, // HTTP status code 500 indicates a server error
      body: JSON.stringify({ error: err.message }), // Response body contains the error message
    };
  }
}
