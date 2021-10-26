import Content from '../Components/Content/ContentComponents'
import { useState, useEffect } from 'react'

export default function ContentContainer ({ data, category, breakpoints, categoryPretty })  {

  const [open, setOpen] = useState('')
  const [filteredData, setFilteredData] = useState([])


  useEffect(() => {
    setFilteredData(data)
  }, [data])

  const sortFilter = (mutation, type, value) => {
    let newData = []

    if(mutation === 'sort') {
      if(type === 'price') {
        newData = data.sort((a,b) => {
         return value === 'HighLow' ? b.price - a.price : a.price - b.price
        })
      } else if (type === 'rating') {
        newData = data.sort((a,b) => {
          return value === 'HighLow' ? b.rating.rate - a.rating.rate : a.rating.rate - b.rating.rate
        })
      } else if (type === 'popularity') {
        newData = data.sort((a,b) => {
          return value === 'HighLow' ? b.rating.count - a.rating.count : a.rating.count - b.rating.count
        })
      }

    } else {
      if(type === 'price') {
        newData = data.filter(item => {
          return item.price >= value[0] && item.price <= value[1]
        })
      } else if (type === 'rating') {
        newData = data.filter(item => {
          return item.rating.rate >= value[0] && item.rating.rate <= value[1]
        })
      } else if (type === 'popularity') {
        newData = data.filter(item => {
          return item.rating.count >= value[0] && item.rating.count <= value[1]
        })
      }
    }

    setFilteredData(newData)
  } 

  const currentBP = breakpoints[category.replaceAll('-', ' ')]

  const openToggle = (string) => {
    if(open === string) {
      setOpen('')
    } else {setOpen(string)}
  }

  const bpOptions = (type, bp1, bp2) => (
    <div 
      className="subOption"
      onClick={() => sortFilter('filter', type, [bp1, bp2])}
    >
      {type === 'price' && '$'} 
      {bp1}
      {(() => {
        if (bp2 !== Infinity) {
        return (
          <>
          - {type === 'price' && '$'}
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
        <h2>
          {categoryPretty}
        </h2>
      </Content.Category>
      <Content.Options>
        <Content.SortFilter onClick={() => openToggle('sort')} y={'0'} x={'-243px'} open={open === 'sort'}>
          <h3>Sort</h3>
          <div className="optionContainer">
            <div className="option first">
              <h4 className="catHeader" >Price</h4>
              <div className="subOption" onClick={() => sortFilter('sort', 'price', 'LowHigh')}>Low-High</div>
              <div className="subOption" onClick={() => sortFilter('sort', 'price', 'HighLow')}>High-Low</div>
            </div>
            <div className="option">
              <h4 className="catHeader">Rating</h4>
              <div className="subOption" onClick={() => sortFilter('sort', 'rating', 'LowHigh')}>Low-High</div>
              <div className="subOption" onClick={() => sortFilter('sort', 'rating', 'HighLow')}>High-Low</div>
            </div>
            <div className="option">
              <h4 className="catHeader">Popularity</h4>
              <div className="subOption" onClick={() => sortFilter('sort', 'popularity', 'LowHigh')}>Low-High</div>
              <div className="subOption" onClick={() => sortFilter('sort', 'popularity', 'HighLow')}>High-Low</div>
            </div>
          </div>
        </Content.SortFilter>
        <Content.SortFilter onClick={() => openToggle('filter')} y={'8em'} x='-263px' open={open === 'filter'}>
          <h3>Filter</h3>
          <div className="optionContainer">
            <div className="option">
              <h4 className="catHeader first">Price</h4>
              {bpOptions('price', currentBP.price[0], currentBP.price[1])}
              {bpOptions('price', currentBP.price[2], currentBP.price[3])}
              {bpOptions('price', currentBP.price[4], Infinity) }
            </div>
            <div className="option">
              <h4 className="catHeader">Rating</h4>
              {bpOptions('rating', currentBP.rating[0], currentBP.rating[1])}
              {bpOptions('rating', currentBP.rating[2], currentBP.rating[3])}
              {bpOptions('rating', currentBP.rating[4], Infinity)}
            </div>
            <div className="option">
              <h4 className="catHeader">Popularity</h4>
              {bpOptions('popularity', currentBP.popularity[0], currentBP.popularity[1])}
              {bpOptions('popularity', currentBP.popularity[2], currentBP.popularity[3])}
              {bpOptions('popularity', currentBP.popularity[4], Infinity)}
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