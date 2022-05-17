
const allDataUtil = require('./allDataUtil')

exports.handler = async function (event, context) {
  const data = await allDataUtil()

  return {
    statusCode: 200,
    body: JSON.stringify({ data }),
  };
}