import { createFileRoute } from '@tanstack/react-router'
import { BookingConfirmation } from '../components/BookingConfirmation'

export const Route = createFileRoute('/bokning-bekraftad')({
  component: BookingConfirmationPage,
  head: () => ({ meta: [{ title: 'Bokning bekräftad · Fotoworkshopen' }] }),
})

function BookingConfirmationPage() {
  return <BookingConfirmation />
}
