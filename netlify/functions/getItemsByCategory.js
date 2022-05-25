
const allDataUtil = require('./allDataUtil')

exports.handler = async function (event, context) {
  const data = await allDataUtil()
  const category = event.queryStringParameters.category
  const items = data.filter(item => item.category.toLowerCase() === category)

  return {
    statusCode: 200,
    body: JSON.stringify(items),
    headers: {
      'Access-Control-Allow-Origin': '*', 
      'Access-Control-Allow-Credentials': 'true' 
    },
  };
}