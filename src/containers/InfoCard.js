import { useParams } from "react-router"
import { useState, useEffect } from 'react'
import { Star } from '../components/svg/Svgs'
import { Loading } from '../components/reUsable/Loading'
import InfoCardComponent from "../components/infoCard/InfoCardComponents"
import { useHistory } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'


function debounce(fn, ms) {
  let timer
  return () => {
    clearTimeout(timer)
    timer = setTimeout(()=> {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  }
}

export default function InfoCard ({ cartUpdater}) {
  const [quantity, setQuantity] = useState(1)
  const [categoryItems, setCategoryItems] = useState(null)
  const [item, setItem] = useState(null)
  const [dimensions, setDimensions] = useState({height: window.innerHeight, width: window.innerWidth})
  const [full, setFull] = useState(false)
  console.log(item, categoryItems)
  
  
  const {category, id} = useParams()
  const history = useHistory()

  useEffect(() => {
    async function getData() {
      const categoryResponse = await fetch(`/.netlify/functions/getItemsByCategory?category=${category}`)
      const categoryData = await categoryResponse.json()
      setCategoryItems(categoryData)

      const itemResponse = await fetch(`.netlify/functions/getItemsById?id=${id}`)
      const itemData = await itemResponse.json()
      setItem(itemData.items[0])
    }
  
    getData()
  }, [])

  function limiter(title, count) {
    return title.slice(0, count) + "..." 
  }

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 1000)

    window.addEventListener('resize', debouncedHandleResize)

    return ()=> {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  })

  function StarSet(rating) {
    const output = []
    for(let i = 0; i < 5; i++ ) {
      if(rating > 1) {
        output.push(<Star rating={5} />);
        rating--;
      } else if (rating > 0) {
        output.push(<Star rating={rating*5} />)
        rating--;
      } else output.push(<Star rating={0} />)
    }

    return output
  }


  return (
    <>
      {item === null ? <Loading /> : (
        <InfoCardComponent>

            <CSSTransition
              in={full}
              classNames="flip"
              timeout={200}
              unmountOnExit
            >
              <InfoCardComponent.FullContainer onClick={() => setFull(false)} src={item.image}  />
            </CSSTransition>
          
          <InfoCardComponent.Image className="main" onClick={() => setFull(true)} src={item.image} />
          <InfoCardComponent.Title>
            {item.title}
          </InfoCardComponent.Title>
          <InfoCardComponent.Price>${item.price}</InfoCardComponent.Price>
          
          <InfoCardComponent.FullRating >{item.ratingRate} {dimensions.width < 970 ? <Star rating={item.ratingRate} /> : StarSet(item.ratingRate)} </InfoCardComponent.FullRating>
          <InfoCardComponent.Description> {item.description} </InfoCardComponent.Description>
          <div className="buttons">
            <InfoCardComponent.QuantityTitle>Quantity:</InfoCardComponent.QuantityTitle>
            <InfoCardComponent.Quantity setQuantity={setQuantity} > {quantity}</InfoCardComponent.Quantity>
            <InfoCardComponent.AddCart onClick={() => cartUpdater(item.id, quantity, history)}/>
          </div>
          <InfoCardComponent.SimilarText>Similar Items:</InfoCardComponent.SimilarText>
          <InfoCardComponent.SuggestionsBox >

            {categoryItems.map(e => (
              <div key={e.id + "cartConfirmationSuggestion"} className={"suggestionItem"} id={"SB" + e.id}>
                <InfoCardComponent.SuggestionsImage src={e.image} />
                <InfoCardComponent.SuggestionsLink category={category} item={e.id} >{limiter(e.title, 10)}</InfoCardComponent.SuggestionsLink>
              </div>
            ))}

          </InfoCardComponent.SuggestionsBox>

        </InfoCardComponent>
      )}
    
    </>
  )
}