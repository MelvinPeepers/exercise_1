import fetch from "node-fetch";

export async function handler(event, context) {
  try {
    const response = await fetch("https://api.example.com/data", {
      headers: {
        Authorization: "Bearer YOUR_API_KEY",
        "Content-Type": "application/json",
      },
    });
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
