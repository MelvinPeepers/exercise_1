import fetch from "node-fetch";

export async function handler(event, context) {
  const { userId } = event.queryStringParameters;

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
    );
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
