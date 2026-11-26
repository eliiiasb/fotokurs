import { useEffect, useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import './BookingReview.css'
import { formatSelectedDate, isCompleteBookingDraft, readBookingDraft } from './bookingDraft'

export function BookingReview() {
  const navigate = useNavigate()
  const [draft] = useState(readBookingDraft)

  useEffect(() => {
    if (!isCompleteBookingDraft(draft)) navigate({ to: '/bokning', replace: true })
  }, [draft, navigate])

  if (!isCompleteBookingDraft(draft)) return null

  const name = [draft['first-name'], draft['last-name']].filter(Boolean).join(' ')

  return (
    <div className="booking-review">
      <section className="booking-review__intro">
        <h1>Granska bokning</h1>
        <p>Säkerställ att alla uppgifter stämmer innan du anmäler dig.</p>
      </section>

      <section className="booking-review__summary" aria-labelledby="booking-summary-title">
        <h2 id="booking-summary-title">Din bokning</h2>
        <p>{name}</p>
        <p>{draft.email}</p>
        <p>{draft.phone}</p>
        <p>{formatSelectedDate(draft['time-slot'])}</p>
      </section>

      <p className="booking-review__price">1 200 kr · Betalas på plats</p>

      <div className="booking-review__actions">
        <a className="booking-review__button" href="/bokning">
          Ändra
        </a>
        <button
          className="booking-review__button"
          type="button"
          onClick={() => navigate({ to: '/bokning-bekraftad' })}
        >
          Boka
        </button>
      </div>
    </div>
  )
}
