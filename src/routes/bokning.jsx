import { createFileRoute } from '@tanstack/react-router'
import { BookingForm } from '../components/BookingForm'

export const Route = createFileRoute('/bokning')({
  component: BookingPage,
  head: () => ({ meta: [{ title: 'Bokning · Fotoworkshopen' }] }),
})

function BookingPage() {
  return (
    <div className="booking-page">
      <a className="booking-page__back" href="/workshop">
        Tillbaka
      </a>
      <BookingForm />
      <div className="booking-page__spacer" aria-hidden="true" />
    </div>
  )
}
