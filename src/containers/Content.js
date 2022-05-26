import Content from '../components/content/ContentComponents'
import { Star } from '../components/svg/Svgs' 
import { Loading } from '../components/reUsable/Loading'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'


export default function ContentContainer ({ 
  categoryItems, 
  category, 
  breakpoints, 
  categoryPretty, 
  sortFilterOption, 
  setSortFilterOption,
  cartUpdater
 })  {

  const [open, setOpen] = useState('')
  const [filteredData, setFilteredData] = useState([])

  const history = useHistory()
  

  useEffect(() => {
    let newData = categoryItems

    let {sortOption, sortValue, filterOption, filterValue } = sortFilterOption


    if(filterOption === 'none') {
      
    } else if(filterOption === 'price') {
      newData = categoryItems.filter(item => {
        return item.price >= filterValue[0] && item.price <= filterValue[1]
      })
    } else if (filterOption === 'rating') {
      newData = categoryItems.filter(item => {
        return item.ratingRate >= filterValue[0] && item.ratingRate <= filterValue[1]
      })
    } else if (filterOption === 'popularity') {
      newData = categoryItems.filter(item => {
        return item.ratingCount >= filterValue[0] && item.ratingCount <= filterValue[1]
      })
    }
    
    if(sortOption === 'price') {
      newData.sort((a,b) => {
        return sortValue === 'HighLow' ? b.price - a.price : a.price - b.price
      })
    } else if (sortOption === 'rating') {
      newData.sort((a,b) => {
        return sortValue === 'HighLow' ? b.ratingRate - a.ratingRate : a.ratingRate - b.ratingRate
      })
    } else if (sortOption === 'popularity') {
      newData.sort((a,b) => {
        return sortValue === 'HighLow' ? b.ratingCount - a.ratingCount : a.ratingCount - b.ratingCount
      })
    }

    //used JSON.parse here because it wasn't recognizing that the data had changed.
    setFilteredData( JSON.parse(JSON.stringify(newData)))

  }, [categoryItems, sortFilterOption])


  const currentBP = breakpoints[category.replaceAll('-', ' ')]

  const openToggle = (string) => {
    if(open === string) {
      setOpen('')
    } else {setOpen(string)}
  }

  const makeFilterBp = (type, bp1, bp2) => (
    <div 
      className="subOption"
      onClick={() => setSortFilterOption(c => {return {...c, filterOption: type, filterValue: [bp1, bp2]}})}
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
      <div className={sortFilterOption.filterOption === type && sortFilterOption.filterValue[0] === bp1 && sortFilterOption.filterValue[1] === bp2  ? "activeSF" : ""} ></div>
    </div>
  )

  return (
    <>

      <Content.Options>
        <Content.SortFilter onClick={() => openToggle('sort')} y={'0'} x={'-243px'} open={open === 'sort'}>
          <h3>Sort</h3>
          <div className="sort optionContainer">
          <div className="option">
              <h4 
                className="catHeader first none" 
                onClick={() => setSortFilterOption(c => {return {...c, sortOption: 'none', sortValue: 'none'}})}
              >
                None  
                <div className={sortFilterOption.sortOption === "none" ? "activeSF" : ""} ></div>
              </h4>
              
            </div>
            <div className="option first">
              <h4 className="catHeader" >Price</h4>
              <div 
                className="subOption" 
                onClick={() => setSortFilterOption(c => {return {...c, sortOption: 'price', sortValue: 'LowHigh'}})}
              >
                Low-High
                <div className={sortFilterOption.sortOption === "price" && sortFilterOption.sortValue === "LowHigh" ? "activeSF" : ""} ></div>
              </div>
              <div 
                className="subOption" onClick={() => setSortFilterOption(c => {return {...c, sortOption: 'price', sortValue: 'HighLow'}})}
              >
                High-Low
                <div className={sortFilterOption.sortOption === "price" && sortFilterOption.sortValue === "HighLow" ? "activeSF" : ""} ></div>
              </div>
            </div>
            <div className="option">
              <h4 className="catHeader">Rating</h4>
              <div 
                className="subOption" 
                onClick={() => setSortFilterOption(c => {return {...c, sortOption: 'rating', sortValue: 'LowHigh'}})}
              >
                Low-High
                <div className={sortFilterOption.sortOption === "rating" && sortFilterOption.sortValue === "LowHigh" ? "activeSF" : ""} ></div>
              </div>
              <div 
                className="subOption" 
                onClick={() => setSortFilterOption(c => {return {...c, sortOption: 'rating', sortValue: 'HighLow'}})}
              >
                High-Low
                <div className={sortFilterOption.sortOption === "rating" && sortFilterOption.sortValue === "HighLow" ? "activeSF" : ""} ></div>
              </div>
            </div>
            <div className="option">
              <h4 className="catHeader">Popularity</h4>
              <div 
                className="subOption" 
                onClick={() => setSortFilterOption(c => {return {...c, sortOption: 'popularity', sortValue: 'LowHigh'}})}
              >
                Low-High
                <div className={sortFilterOption.sortOption === "popularity" && sortFilterOption.sortValue === "LowHigh" ? "activeSF" : ""} ></div>
              </div>
              <div 
                className="subOption" 
                onClick={() => setSortFilterOption(c => {return {...c, sortOption: 'popularity', sortValue: 'HighLow'}})}
              >
                High-Low
                <div className={sortFilterOption.sortOption === "popularity" && sortFilterOption.sortValue === "HighLow" ? "activeSF" : ""} ></div>
              </div>
            </div>
          </div>
        </Content.SortFilter>
        <Content.SortFilter onClick={() => openToggle('filter')} y={'100px'} x='-243px' open={open === 'filter'}>
          <h3>Filter</h3>
          <div className="filter optionContainer">
            <div className="option">
              <h4 
                className="catHeader first none" 
                onClick={() => setSortFilterOption(c => {return {...c, filterOption: 'none', filterValue: 'none'}})}
              >
                None
                <div className={sortFilterOption.filterOption === "none" ? "activeSF" : ""} ></div>
              </h4>
            </div>
            <div className="option first">
              <h4 className="catHeader">Price</h4>
              {makeFilterBp('price', currentBP.price[0], currentBP.price[1])}
              {makeFilterBp('price', currentBP.price[2], currentBP.price[3])}
              {makeFilterBp('price', currentBP.price[4], Infinity) }
            </div>
            <div className="option">
              <h4 className="catHeader">Rating</h4>
              {makeFilterBp('rating', currentBP.rating[0], currentBP.rating[1])}
              {makeFilterBp('rating', currentBP.rating[2], currentBP.rating[3])}
              {makeFilterBp('rating', currentBP.rating[4], Infinity)}
            </div>
            <div className="option">
              <h4 className="catHeader">Popularity</h4>
              {makeFilterBp('popularity', currentBP.popularity[0], currentBP.popularity[1])}
              {makeFilterBp('popularity', currentBP.popularity[2], currentBP.popularity[3])}
              {makeFilterBp('popularity', currentBP.popularity[4], Infinity)}
            </div>
          </div>
        </Content.SortFilter>
      </Content.Options>
      {categoryItems === null ? 
      <Content.Category>
        <h2>Items not found, try reloading the page</h2>
      </Content.Category>
      : 
      <>
        <Content.Category>
          <h2>
            {categoryPretty}
          </h2>
        </Content.Category>
        <Content.Frame>
        {!filteredData ? null : filteredData.map(item => (
          <Content.ContentCard key={item.id + 'j'}>
            <Content.Image src={item.image}/>
            <Content.Name>{item.title}</Content.Name>
            <Content.InfoBox>
              <Content.Price>${item.price}</Content.Price>
              <Content.Rating>
                {item.ratingRate}
                <Star rating={item.ratingRate}/>
              </Content.Rating>
            </Content.InfoBox>
            <Content.MoreInfo category={category} item={item.id}/>
            <Content.AddCart onClick={() => cartUpdater(item.id, 1,  history)} />
          </Content.ContentCard>
        ))}
        </Content.Frame>
      </>
      }
    </>
  )
}