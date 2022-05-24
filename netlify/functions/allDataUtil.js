const { GoogleSpreadsheet } = require('google-spreadsheet')

module.exports = async () => {
  const doc = new GoogleSpreadsheet('14pE3g88RfeSdg_9R2duMIKuvgdk0zghXqfDoaLgItyA')
  let items
  try {

    await doc.useServiceAccountAuth({
      client_email: 'lukesutter@react-e-commerce-db-349813.iam.gserviceaccount.com',
      private_key: process.env.REACT_APP_API_KEY.replace(/\\n/g, "\n")
    })
    
    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[0]
  
    const rows = await sheet.getRows()

    items = rows.map(row => {
      let tempObj = {}
      row._rawData.forEach((cell, cellIndex) => {
        tempObj[sheet.headerValues[cellIndex]] = cell

      })
      return tempObj
    })

    console.log(items[0])
    return items
  } catch (e) {
    console.log(e)
  }
}