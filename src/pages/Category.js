import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ContentContainer from "../containers/Content"

export default function Category ( { breakpoints, sortFilterOption, setSortFilterOption, cartUpdater } )  {
  const [categoryItems, setCategoryItems] = useState(null)
  const { category } = useParams()
  let categoryPretty = category.split(' ').map(element => {
    return element[0].toUpperCase() + element.substring(1)
  }).join(' ')

useEffect(() => {
  async function getData() {
    const values = await fetch(`/.netlify/functions/getItemsByCategory?category=${category}`)
    const data = await values.json()
    setCategoryItems(data)
  }

  getData()
}, [category])


  return (
    <section>
      <ContentContainer 
        categoryItems={categoryItems} 
        category={category} 
        categoryPretty={categoryPretty} 
        breakpoints={breakpoints} 
        sortFilterOption={sortFilterOption} 
        setSortFilterOption={setSortFilterOption}
        cartUpdater={cartUpdater}
      />
    </section>
  )
}