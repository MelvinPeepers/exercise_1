// https://docs.netlify.com/functions/get-started/?fn-language=js#code-your-function-2

export async function handler(event, context) {
  console.time("Start");

  // Perform an asynchronous operation (e.g., setTimeout)
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000); // Wait for 1 second
  });

  console.timeEnd("End");

  return {
    statusCode: 200,
    body: "Netlify function executed!",
  };
}
