import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Loading } from "../components/reUsable/Loading"
import ContentContainer from "../containers/Content"
import { StyledMain } from "../components/StyledMain"

export default function Category ( { sortFilterOption, setSortFilterOption, cartUpdater } )  {
  const [categoryItems, setCategoryItems] = useState(null)
  const { category } = useParams()
  let categoryPretty = category.split(' ').map(element => {
    return element[0].toUpperCase() + element.substring(1)
  }).join(' ')

useEffect(() => {
  setCategoryItems(null)
  async function GetData() {
    const values = await fetch(`/.netlify/functions/getItemsByCategory?category=${category}`)
    const data = await values.json()
    setCategoryItems(data)

  }

  GetData()
}, [category])

  return (

    <StyledMain>
    {categoryItems === null ?
          <Loading /> :

        <ContentContainer 
          categoryItems={categoryItems} 
          category={category} 
          categoryPretty={categoryPretty} 
          sortFilterOption={sortFilterOption} 
          setSortFilterOption={setSortFilterOption}
          cartUpdater={cartUpdater} 
        /> 

      
    } 
    
    </StyledMain>
  )
}

