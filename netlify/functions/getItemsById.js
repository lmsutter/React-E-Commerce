
const allDataUtil = require('./allDataUtil')

exports.handler = async function (event, context) {
  const idsToMatch = event.queryStringParameters.id.split(',')

  try {
    const data = await allDataUtil()
    const items = data.filter(item => idsToMatch.includes(item.id))
  
   
    return {
      statusCode: 200,
      body: JSON.stringify({ items: items }),
      headers: {
        'Access-Control-Allow-Origin': '*', 
        'Access-Control-Allow-Credentials': 'true' 
      },
    }
    
  } catch (error) {
    console.log(error)
  }
};
