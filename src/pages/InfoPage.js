import { useParams } from 'react-router'
import InfoCard from '../containers/InfoCard'

export default function InfoPage ({data}) {
  const { category, item } = useParams()

  return (
    <>
      <InfoCard data={data} category={category} item={item} />
    </>
  )
}