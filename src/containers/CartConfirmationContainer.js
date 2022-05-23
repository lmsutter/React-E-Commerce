import {useEffect, useState} from 'react'
import InfoCardComponent from '../components/infoCard/InfoCardComponents'
import { CircleCheckFill } from 'akar-icons'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { SuggestionsBox } from '../components/infoCard/InfoCardStyled'


export default function CartConfirmationContainer ({ cartData }) {

  const { id } = useParams()
  const [categoryItems, setCategoryItems] = useState(null)
  
  useEffect(() => {
    async function initialize () {
      const values = await fetch(`/.netlify/functions/getCategoryById?id=${id}`)
      const data = await values.json()
      console.log(data)
      setCategoryItems(data)
    }
    initialize()
  }, [cartData])

  const cartLength = cartData.reduce((accum, current) => accum = current.quantity + accum, 0)

 
  function limiter(title, count) {
    return title.slice(0, count) + "..." 
  }

  return (
    <InfoCardComponent.CartConfirmationCard >
      <InfoCardComponent.Title>
      <CircleCheckFill className="checkMark" strokeWidth={3} size={24} />
          Item Successfully Added to Cart!
      </InfoCardComponent.Title>
      <InfoCardComponent.CConfirmationText>Total items in cart: {cartLength}</InfoCardComponent.CConfirmationText>
      <SuggestionsBox>
        {categoryItems !== null && categoryItems.map((e, i)=> (
          <div key={i+"suggestion"} className={"suggestionItem"} id={"SB" + e.id}>
            <InfoCardComponent.SuggestionsImage src={e.image} />
            <InfoCardComponent.SuggestionsLink category={categoryItems[0].category} item={e.id} >{limiter(e.title, 14)}</InfoCardComponent.SuggestionsLink>
          </div>
        ))}
      </SuggestionsBox>
    </InfoCardComponent.CartConfirmationCard>
  )
}