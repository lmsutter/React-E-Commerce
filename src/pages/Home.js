import { StyledMain } from '../components/StyledMain'
import CompanyMotto from '../containers/CompanyMotto'
import HomeContentContainer from '../containers/HomeContent'

export default function Home ({ cartUpdater }) {
  return (
    <StyledMain>
      <HomeContentContainer cartUpdater={cartUpdater} />
      <CompanyMotto />
    </StyledMain>
  )
}