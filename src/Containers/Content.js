import Content from '../Components/Content/ContentComponents'
import { useState, useEffect } from 'react'

export default function ContentContainer ({ data, category, breakpoints, categoryPretty })  {

  const [open, setOpen] = useState('')
  const [sFOption, setSFOption] = useState({mutation: '', type: '', value: ''})
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    setFilteredData(data)
  }, [data])

  //trt calling setFilteredData Directly when
  useEffect(() => {
    if (sFOption.mutation === 'sort') {
      const my = filteredData.sort((a, b) => {
        if (sFOption.type === 'price') {
          return sFOption.value === 'HighLow' ?  b.price - a.price : a.price - b.price
        }  else if (sFOption.type === 'rating') {
          return sFOption.value === 'HighLow' ?  b.rating.rate - a.rating.rate : a.rating.rate - b.rating.rate
        } else {
          return sFOption.value === 'HighLow' ? b.rating.count - a.rating.count : a.rating.count - b.rating.count
        }
      })

      setFilteredData(my)

    }
  }, [sFOption, filteredData])

  const currentBP = breakpoints[category.replaceAll('-', ' ')]

  const openToggle = (string) => {
    if(open === string) {
      setOpen('')
    } else {setOpen(string)}
  }

  const bpOptions = (type, bp1, bp2) => (
    <div 
      onClick={() => setSFOption({mutation: 'filter', type: type, value: [bp1, bp2]})}
    >
      {category === 'price' && '$'}
      {bp1}
      {(() => {
        if (bp2) {
        return (
          <>
          - {category === 'price' && '$'}
          {bp2}
          </>
        )
        } else return "+"
      })()}
      
    </div>
  )




  return (
    <>
      <Content.Category>
        {categoryPretty}
      </Content.Category>
      <Content.Options>
        <Content.SortFilter onClick={() => openToggle('sort')} y={'0'} x={'-90px'} open={open === 'sort'}>
          <h3>Sort</h3>
          <div className="optionContainer">
            <div className="option">
              Price
              <div className="subOption" onClick={() => setSFOption({mutation: 'sort', type: 'price', value: 'LowHigh'})}>Low-High</div>
              <div className="subOption" onClick={() => setSFOption({mutation: 'sort', type: 'price', value: 'HighLow'})}>High-Low</div>
            </div>
            <div className="option">
              Rating
              <div className="subOption" onClick={() => setSFOption({mutation: 'sort', type: 'rating', value: 'LowHigh'})}>Low-High</div>
              <div className="subOption" onClick={() => setSFOption({mutation: 'sort', type: 'rating', value: 'HighLow'})}>High-Low</div>
            </div>
            <div className="option">
              Popularity
              <div className="subOption" onClick={() => setSFOption({mutation: 'sort', type: 'popularity', value: 'LowHigh'})}>Low-High</div>
              <div className="subOption" onClick={() => setSFOption({mutation: 'sort', type: 'popularity', value: 'HighLow'})}>High-Low</div>
            </div>
          </div>
        </Content.SortFilter>
        <Content.SortFilter onClick={() => openToggle('filter')} y={'6em'} x='-91px' open={open === 'filter'}>
          <h3>Filter</h3>
          <div className="optionContainer">
            <div className="option">
              Price
              {bpOptions('price', currentBP.price[0], currentBP.price[1])}
              {bpOptions('price', currentBP.price[2], currentBP.price[3])}
              {bpOptions('price', currentBP.price[4])}
            </div>
            <div className="option">
              Rating
              {bpOptions('rating', currentBP.rating[0], currentBP.rating[1])}
              {bpOptions('rating', currentBP.rating[2], currentBP.rating[3])}
              {bpOptions('rating', currentBP.rating[4])}
            </div>
            <div className="option">
              Popularity
              {bpOptions('popularity', currentBP.popularity[0], currentBP.popularity[1])}
              {bpOptions('popularity', currentBP.popularity[2], currentBP.popularity[3])}
              {bpOptions('popularity', currentBP.popularity[4])}
            </div>
          </div>
        </Content.SortFilter>
      </Content.Options>
      <Content.Frame>
      {filteredData.map(item => (
        <Content.ContentCard key={item.id}>
          <Content.Name>{item.title}</Content.Name>
          <Content.Image src={item.image}/>
          <Content.InfoBox>
            <Content.Price>${item.price}</Content.Price>
            <Content.Rating>{item.rating.rate}</Content.Rating>
          </Content.InfoBox>
          <Content.MoreInfo />
          <Content.AddCart />
        </Content.ContentCard>
      ))}
      </Content.Frame>
    </>
  )
}