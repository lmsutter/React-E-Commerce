import CompanyMotto from '../containers/CompanyMotto'
import HomeContentContainer from '../containers/HomeContent'

export default function Home ({ data }) {
  return (
    <>
      <HomeContentContainer data={data} />
      <CompanyMotto />
    </>
  )
}