import { useParams } from "react-router"
import { useState, useEffect } from 'react'
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
  const [quantity, setQuantity] = useState(0)
  const [dimensions, setDimensions] = useState({height: window.innerHeight, width: window.innerWidth})

  const limitedCategory = data.filter(e => e.category === category).sort(() => .5 - Math.random()).slice(0, 3)

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


  return (
    <>
      {!data[item] ? null : (
        <InfoCardComponent>
          
          <InfoCardComponent.Image src={data[item].image}></InfoCardComponent.Image>
            <InfoCardComponent.Title>
            {dimensions.width}
              {/* {data[item].title} */}
            </InfoCardComponent.Title>
            <InfoCardComponent.Price>${data[item].price}</InfoCardComponent.Price>
            <InfoCardComponent.FullRating > {data[item].rating.rate} </InfoCardComponent.FullRating>
            <InfoCardComponent.Description> {data[item].description} </InfoCardComponent.Description>
            <InfoCardComponent.QuantityTitle>Quantity</InfoCardComponent.QuantityTitle>
            <InfoCardComponent.Quantity> {quantity} ^</InfoCardComponent.Quantity>
            <InfoCardComponent.CartButton> + Cart </InfoCardComponent.CartButton>
            <InfoCardComponent.SimilarText>Similar Items:</InfoCardComponent.SimilarText>
            <InfoCardComponent.SuggestionsBox>

            {limitedCategory.map((e)=> (
              <div className={"suggestionItem"} id={"SB" + e.id}>
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