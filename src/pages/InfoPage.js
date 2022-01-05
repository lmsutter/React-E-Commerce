import { useParams } from 'react-router'
import InfoCard from '../containers/InfoCard'

export default function InfoPage ({data, cartData, setCartData}) {
  const { category, item } = useParams()

  return (
    <>
      <InfoCard data={data} category={category} item={item} cartData={cartData} setCartData={setCartData} />
    </>
  )
}