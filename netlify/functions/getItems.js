exports.handler = async function (event, context) {
  console.log('request')

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
}