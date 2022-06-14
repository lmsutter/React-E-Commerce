import InfoCard from '../containers/InfoCard'

export default function InfoPage ({cartUpdater}) {

  return (
    <main>
      <InfoCard cartUpdater={cartUpdater} />
    </main>
  )
}