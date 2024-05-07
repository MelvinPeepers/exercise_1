export async function handler(event, context) {
  console.time("TIME");

  // Perform an asynchronous operation (e.g., setTimeout)
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000); // Wait for 1 second
  });

  console.timeEnd("TIME");

  return {
    statusCode: 200,
    body: "Netlify SWAPI function executed!",
  };
}
