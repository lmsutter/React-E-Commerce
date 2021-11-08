import { useParams } from "react-router-dom"
import ContentContainer from "../containers/Content"

export default function Category ( props )  {
  const { category } = useParams()
  let categoryPretty = category.split('-').map(element => {
    return element[0].toUpperCase() + element.substring(1)
  }).join(' ')
  const categoryData = props.data.filter(item => {
    const converted = item.category.replaceAll(" ", "-")
    if(category === converted) {

      return true
    } else return false
  })


  return (
    <section>
      <ContentContainer data={categoryData} category={category} categoryPretty={categoryPretty} breakpoints={props.breakpoints}/>
    </section>
  )
}