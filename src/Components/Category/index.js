import { useParams } from "react-router-dom"

export default function Category ( props )  {
  const { category } = useParams()

  

  return (
    <>
      <h2>{category}</h2>
    </>
  )
}