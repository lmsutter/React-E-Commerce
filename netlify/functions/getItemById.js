
const allDataUtil = require('./allDataUtil')

exports.handler = async function (event, context) {
  const data = await allDataUtil()
  const item = data.find(item => item.id === event.queryStringParameters.id)
  return {
    statusCode: 200,
    body: JSON.stringify({ item }),
  };
} 