import { useParams } from "react-router"
import { useState, useEffect } from 'react'
import { Star } from '../components/svg/Svgs'
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

export default function InfoCard ({data, cartUpdater}) {
  const {category, item} = useParams()
  const [quantity, setQuantity] = useState(1)
  const [dimensions, setDimensions] = useState({height: window.innerHeight, width: window.innerWidth})
  const [limitedCategory, setLimitedCategory] = useState([])
  const [full, setFull] = useState(false)


  const history = useHistory()

  const currentItemIndex = parseInt(item) - 1

  useEffect(() => {
    setLimitedCategory(data.filter(e => {

      return (e.category === category) && ((e.id - 1) !== parseInt(item - 1 ))
    }).sort(() => .5 - Math.random()).slice(0, 3))
    setQuantity(1)
  }, [item, data, category])
   


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

      {!data[item] ? null : (
        <InfoCardComponent>

            <CSSTransition
              in={full}
              classNames="flip"
              timeout={200}
              unmountOnExit
            >
              <InfoCardComponent.FullContainer onClick={() => setFull(false)} src={data[currentItemIndex].image}  />
            </CSSTransition>
          
          <InfoCardComponent.Image className="main" onClick={() => setFull(true)} src={data[currentItemIndex].image} />
          <InfoCardComponent.Title>
            {data[currentItemIndex].title}
          </InfoCardComponent.Title>
          <InfoCardComponent.Price>${data[currentItemIndex].price}</InfoCardComponent.Price>
          
          <InfoCardComponent.FullRating >{data[currentItemIndex].rating.rate} {dimensions.width < 970 ? <Star rating={data[currentItemIndex].rating.rate} /> : StarSet(data[currentItemIndex].rating.rate)} </InfoCardComponent.FullRating>
          <InfoCardComponent.Description> {data[currentItemIndex].description} </InfoCardComponent.Description>
          <div className="buttons">
            <InfoCardComponent.QuantityTitle>Quantity:</InfoCardComponent.QuantityTitle>
            <InfoCardComponent.Quantity setQuantity={setQuantity} > {quantity}</InfoCardComponent.Quantity>
            <InfoCardComponent.AddCart onClick={() => cartUpdater(data[currentItemIndex].id, quantity, history)}/>
          </div>
          <InfoCardComponent.SimilarText>Similar Items:</InfoCardComponent.SimilarText>
          <InfoCardComponent.SuggestionsBox >

            {limitedCategory.map(e => (
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