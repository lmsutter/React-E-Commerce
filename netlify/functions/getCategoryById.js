
const allDataUtil = require('./allDataUtil')

exports.handler = async function (event, context) {
  const data = await allDataUtil()
  const id = event.queryStringParameters.id
  const keyItem = data.find(item => item.id === id)
  const items = data.filter(item => item.category === keyItem.category)

  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
}