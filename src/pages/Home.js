import CompanyMotto from '../containers/CompanyMotto'
import HomeContentContainer from '../containers/HomeContent'

export default function Home ({ data, cartUpdater }) {
  return (
    <>
      <HomeContentContainer data={data} cartUpdater={cartUpdater} />
      <CompanyMotto />
    </>
  )
}