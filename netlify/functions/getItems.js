exports.handler = async function (event, context) {
  console.log('hello')

  return {
    statuscode: 200,
    body: JSON.stringify({ message: "Hello" })
  }
}