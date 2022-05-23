import CompanyMotto from '../containers/CompanyMotto'
import HomeContentContainer from '../containers/HomeContent'

export default function Home ({ cartUpdater }) {
  return (
    <>
      <HomeContentContainer cartUpdater={cartUpdater} />
      <CompanyMotto />
    </>
  )
}