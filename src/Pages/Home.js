import CompanyMotto from '../containers/CompanyMotto'
import HomeContentContainer from '../containers/HomeContent'

export default function Home ({ data, cartData, setCartData }) {
  return (
    <>
      <HomeContentContainer data={data} cartData={cartData} setCartData={setCartData} />
      <CompanyMotto />
    </>
  )
}