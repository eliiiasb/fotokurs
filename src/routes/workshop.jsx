import { createFileRoute } from '@tanstack/react-router'
import { WorkshopDetails } from '../components/WorkshopDetails'

export const Route = createFileRoute('/workshop')({
  component: WorkshopPage,
  head: () => ({ meta: [{ title: 'Ta kontroll över din kamera · Fotoworkshopen' }] }),
})

function WorkshopPage() {
  return (
    <div className="workshop-page">
      <a className="workshop-page__back workshop-page__back--top" href="/">
        Tillbaka
      </a>
      <WorkshopDetails />
      <a className="workshop-page__back workshop-page__back--mobile" href="/">
        Tillbaka
      </a>
    </div>
  )
}
