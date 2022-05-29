
const allDataUtil = require('./allDataUtil')

exports.handler = async function (event, context) {
  const idsToMatch = event.queryStringParameters.id.split(',')
  // const data = await allDataUtil()
  // const items = data.filter(item => idsToMatch.includes(item.id))

  console.log(process.env)
 
  console.log('here')
  return {
    statusCode: 200,
    body: JSON.stringify({ items: [1, 2, 3] }),
    headers: {
      'Access-Control-Allow-Origin': '*', 
      'Access-Control-Allow-Credentials': 'true' 
    },
  };
} 