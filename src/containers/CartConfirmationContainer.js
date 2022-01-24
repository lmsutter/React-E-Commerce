import InfoCardComponent from '../components/infoCard/InfoCardComponents'
import { CircleCheckFill } from 'akar-icons'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { SuggestionsBox } from '../components/infoCard/InfoCardStyled'


export default function CartConfirmationContainer ({ data}) {

  const { item } = useParams()
  const currentIndex = item - 1 
  const itemInfo = data[currentIndex]

  const limitedCategory = data.filter(e => {
    return (e.category === itemInfo.category) && (e.id !== item)
  }).sort(() => .5 - Math.random()).slice(0, 3)

  function limiter(title, count) {
    return title.slice(0, count) + "..." 
  }

  return (
    <InfoCardComponent.CartConfirmationCard>
      <InfoCardComponent.Title>
      <CircleCheckFill className="checkMark" strokeWidth={3} size={24} />
          Item Successfully Added to Cart!
      </InfoCardComponent.Title>
      <InfoCardComponent.CConfirmationText>Total items in cart: {NaN}</InfoCardComponent.CConfirmationText>
      <SuggestionsBox>
        {limitedCategory.map((e, i)=> (
          <div key={i+"suggestion"} className={"suggestionItem"} id={"SB" + e.id}>
            <InfoCardComponent.SuggestionsImage src={e.image} />
            <InfoCardComponent.SuggestionsLink category={itemInfo.category} item={e.id} >{limiter(e.title, 14)}</InfoCardComponent.SuggestionsLink>
          </div>
        ))}
      </SuggestionsBox>
    </InfoCardComponent.CartConfirmationCard>
  )
}