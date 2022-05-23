
const allDataUtil = require('./allDataUtil')

exports.handler = async function (event, context) {
  const idsToMatch = event.queryStringParameters.id.split(',')
  const data = await allDataUtil()
  const items = data.filter(item => idsToMatch.includes(item.id))
  return {
    statusCode: 200,
    body: JSON.stringify({ items }),
  };
} 