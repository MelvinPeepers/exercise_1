// temp JS to ensure it's working:
// https://www.netlify.com/blog/intro-to-serverless-functions/

export const handler: Handler = async (event, context) => {
  return {
    body: JSON.stringify({ message: "Hello World" }),
    statusCode: 200,
  };
};