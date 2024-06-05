import fetch from "node-fetch";

export async function handler(event, context) {
  try {
    const [response1, response2] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/todos/1"),
      fetch("https://jsonplaceholder.typicode.com/users/1"),
    ]);

    const data1 = await response1.json();
    const data2 = await response2.json();

    return {
      statusCode: 200,
      body: JSON.stringify({ todo: data1, user: data2 }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
