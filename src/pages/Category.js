import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Loading } from "../components/reUsable/Loading"
import ContentContainer from "../containers/Content"
import styled from "styled-components"

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

    <>
    {categoryItems === null ?
        <StyledWrapper>
          <Loading />
        </StyledWrapper> :

        <ContentContainer 
          categoryItems={categoryItems} 
          category={category} 
          categoryPretty={categoryPretty} 
          sortFilterOption={sortFilterOption} 
          setSortFilterOption={setSortFilterOption}
          cartUpdater={cartUpdater}
        />

      
    }
    
    </>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`