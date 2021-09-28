import { useParams } from "react-router-dom"

export default function Category ( props )  {
  const { category } = useParams()

  return (
    <>
      <h1>category</h1>
      <h2>{category}</h2>
    </>
  )
}