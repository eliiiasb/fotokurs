import { useEffect, useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import './BookingConfirmation.css'
import {
  formatSelectedDate,
  isCompleteBookingDraft,
  readBookingDraft,
} from './bookingDraft'

const bookingReference = 'L101'

export function BookingConfirmation() {
  const navigate = useNavigate()
  const [draft] = useState(readBookingDraft)

  useEffect(() => {
    if (!isCompleteBookingDraft(draft)) navigate({ to: '/bokning', replace: true })
  }, [draft, navigate])

  if (!isCompleteBookingDraft(draft)) return null

  const date = formatSelectedDate(draft['time-slot'], false)

  return (
    <div className="booking-confirmation">
      <section className="booking-confirmation__success" aria-label="Bokningen bekräftad">
        <div className="booking-confirmation__success-copy">
          <h1>Tack för din bokning!</h1>
          <p>
            Du kommer få en bokningsbekräftelse på mailen. Håll även utkik i skräpposten.
          </p>
        </div>
        <p className="booking-confirmation__reference">Bokning: {bookingReference}</p>
      </section>

      <section className="booking-confirmation__welcome" aria-labelledby="booking-welcome-title">
        <div className="booking-confirmation__welcome-copy">
          <h2 id="booking-welcome-title">Välkommen</h2>
          <p>
            Du är välkommen att delta den {date} hos oss på Södermalm. Avgiften på 1 200 kr
            betalas på plats, det går även bra med Swish.
          </p>
          <p>Ta med egen utrustning som kamera och kläder efter väder.</p>
        </div>
        <p className="booking-confirmation__reference">Bokning: {bookingReference}</p>
      </section>

      <a className="booking-confirmation__button" href="/">
        Återvänd till startsidan
      </a>
    </div>
  )
}
