import './BookingForm.css'
import { useNavigate } from '@tanstack/react-router'
import { bookingTimeSlots, readBookingDraft, saveBookingDraft } from './bookingDraft'

export function BookingForm() {
  const navigate = useNavigate()
  const draft = readBookingDraft() ?? {}

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const bookingDraft = Object.fromEntries(formData.entries())
    saveBookingDraft(bookingDraft)
    navigate({ to: '/granska-bokning' })
  }

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
    >
      <div className="booking-form__intro">
        <h1>Bokning</h1>
        <p>
          En workshop för vuxna nybörjare som vill komma vidare från autoläget.
          Dagen innehåller korta genomgångar och praktiska fotoövningar, både inne och ute.
        </p>
      </div>

      <dl className="booking-form__info">
        <div>
          <dt>Plats</dt>
          <dd>Ljusrum fotostudio på Södermalm i Stockholm och utomhus i närheten.</dd>
        </div>
        <div>
          <dt>Pris</dt>
          <dd>
            1 200 kr inklusive moms
            <br />
            (Betalas på plats)
          </dd>
        </div>
      </dl>

      <fieldset className="booking-form__dates">
        <legend>Välj datum och tid</legend>
        {bookingTimeSlots.map((slot, index) => (
          <label className="booking-form__time" key={slot}>
            <input
              type="radio"
              name="time-slot"
              value={slot}
              defaultChecked={draft['time-slot'] === slot}
              required={index === 0}
            />
            <span>{slot}</span>
          </label>
        ))}
      </fieldset>

      <fieldset className="booking-form__details">
        <legend>Fyll i dina uppgifter för att anmäla dig</legend>
        <label>
          Förnamn*
          <input type="text" name="first-name" defaultValue={draft['first-name']} required />
        </label>
        <label>
          Efternamn*
          <input type="text" name="last-name" defaultValue={draft['last-name']} required />
        </label>
        <label>
          E-post*
          <input type="email" name="email" placeholder="exempel@domän.se" defaultValue={draft.email} required />
        </label>
        <label>
          Mobilnummer*
          <input type="tel" name="phone" placeholder="+46" defaultValue={draft.phone} required />
        </label>
      </fieldset>

      <label className="booking-form__terms">
        <input type="checkbox" name="terms" required defaultChecked={draft.terms === 'on'} />
        <span>Jag godkänner anmälningsvilkoren. *</span>
      </label>

      <p className="booking-form__required">
        * = obligatoriska fält som måste fyllas i eller besvaras för att kunna fortsätta.
      </p>

      <div className="booking-form__actions">
        <a className="booking-form__button" href="/">
          Avbryt
        </a>
        <button className="booking-form__button" type="submit">
          Granska bokning
        </button>
      </div>
    </form>
  )
}
