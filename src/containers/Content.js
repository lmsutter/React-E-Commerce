import Content from '../components/content/ContentComponents'
import { Star } from '../components/svg/Svgs' 
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import useBreakpoints from '../hooks/useBreakpoints'


export default function ContentContainer ({ 
  categoryItems, 
  category, 
  categoryPretty, 
  sortFilterOption, 
  setSortFilterOption,
  cartUpdater
 })  {

   
  const [open, setOpen] = useState('')
  const [filteredData, setFilteredData] = useState([])
  
  const history = useHistory()

  const breakpoints = useBreakpoints(categoryItems) 
   
   
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

      {breakpoints  && <>
        <Content.Options>
          <Content.SortFilter onClick={() => openToggle('sort')} y={'0'} x={'-243px'} open={open === 'sort'}>
            <h2>Sort</h2>
            <div className="sort optionContainer">
            <div className="option">
                <h3 
                  className="catHeader first none" 
                  onClick={() => setSortFilterOption(c => {return {...c, sortOption: 'none', sortValue: 'none'}})}
                >
                  None  
                  <div className={sortFilterOption.sortOption === "none" ? "activeSF" : ""} ></div>
                </h3>
                
              </div>
              <div className="option first">
                <h3 className="catHeader" >Price</h3>
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
                <h3 className="catHeader">Rating</h3>
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
                <h3 className="catHeader">Popularity</h3>
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
            <h2>Filter</h2>
            <div className="filter optionContainer">
              <div className="option">
                <h3 
                  className="catHeader first none" 
                  onClick={() => setSortFilterOption(c => {return {...c, filterOption: 'none', filterValue: 'none'}})}
                >
                  None
                  <div className={sortFilterOption.filterOption === "none" ? "activeSF" : ""} ></div>
                </h3>
              </div>
              <div className="option first">
                <h3 className="catHeader">Price</h3>
                {makeFilterBp('price', breakpoints.price[0], breakpoints.price[1])}
                {makeFilterBp('price', breakpoints.price[2], breakpoints.price[3])}
                {makeFilterBp('price', breakpoints.price[4], Infinity) }
              </div>
              <div className="option">
                <h3 className="catHeader">Rating</h3>
                {makeFilterBp('rating', breakpoints.rating[0], breakpoints.rating[1])}
                {makeFilterBp('rating', breakpoints.rating[2], breakpoints.rating[3])}
                {makeFilterBp('rating', breakpoints.rating[4], Infinity)}
              </div>
              <div className="option">
                <h3 className="catHeader">Popularity</h3>
                {makeFilterBp('popularity', breakpoints.popularity[0], breakpoints.popularity[1])}
                {makeFilterBp('popularity', breakpoints.popularity[2], breakpoints.popularity[3])}
                {makeFilterBp('popularity', breakpoints.popularity[4], Infinity)}
              </div>
            </div>
          </Content.SortFilter>
        </Content.Options>
      </>}

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
            <Content.Image alt={item.description} src={item.image}/>
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