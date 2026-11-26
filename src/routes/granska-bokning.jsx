import { createFileRoute } from '@tanstack/react-router'
import { BookingReview } from '../components/BookingReview'

export const Route = createFileRoute('/granska-bokning')({
  component: BookingReviewPage,
  head: () => ({ meta: [{ title: 'Granska bokning · Fotoworkshopen' }] }),
})

function BookingReviewPage() {
  return <BookingReview />
}
