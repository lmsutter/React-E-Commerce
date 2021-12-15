import { useParams } from "react-router"
import { useState, useEffect } from 'react'
import { Star } from '../components/svg/Svgs'
import CartButton from "../components/reUsable/CartButton"
import InfoCardComponent from "../components/infoCard/InfoCardComponents"


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

export default function InfoCard ({data}) {
  const {category, item} = useParams()
  const [quantity, setQuantity] = useState(1)
  const [dimensions, setDimensions] = useState({height: window.innerHeight, width: window.innerWidth})
  const [limitedCategory, setLimitedCategory] = useState([])

  useEffect(() => {
    setLimitedCategory(data.filter(e => {

      return (e.category === category) && ((e.id - 1) !== parseInt(item))
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
          
          <InfoCardComponent.Image src={data[item].image}></InfoCardComponent.Image>
          <InfoCardComponent.Title>
            {data[item].title}
          </InfoCardComponent.Title>
          <InfoCardComponent.Price>${data[item].price}</InfoCardComponent.Price>
          
          <InfoCardComponent.FullRating >{data[item].rating.rate} {dimensions.width < 970 ? <Star rating={data[item].rating.rate} /> : StarSet(data[item].rating.rate)} </InfoCardComponent.FullRating>
          <InfoCardComponent.Description> {data[item].description} </InfoCardComponent.Description>
          <InfoCardComponent.QuantityTitle>Quantity:</InfoCardComponent.QuantityTitle>
          <InfoCardComponent.Quantity setQuantity={setQuantity} > {quantity}</InfoCardComponent.Quantity>
          <InfoCardComponent.CartButton id={data[item].id} > + Cart </InfoCardComponent.CartButton>
          <InfoCardComponent.SimilarText>Similar Items:</InfoCardComponent.SimilarText>
          <InfoCardComponent.SuggestionsBox>

          {limitedCategory.map((e, i)=> (
            <div key={i+"suggestion"} className={"suggestionItem"} id={"SB" + e.id}>
              <InfoCardComponent.SuggestionsImage src={e.image} />
              <InfoCardComponent.SuggestionsLink category={category} item={e.id - 1} >{limiter(e.title, 10)}</InfoCardComponent.SuggestionsLink>
            </div>
          ))}

          </InfoCardComponent.SuggestionsBox>
        </InfoCardComponent>
      )}
    
    </>
  )
}