import './WorkshopDetails.css'

export function WorkshopDetails() {
  const details = [
    ['Plats', 'Ljusrum fotostudio på Södermalm i Stockholm och utomhus i närheten.'],
    ['Pris', '1 200 kr inklusive moms', '(Betalas på plats)'],
    ['Gruppstorlek', 'Högst 10 deltagare'],
    ['Lediga platser', '5 platser'],
    ['Ingår', 'Handledning, övningsmaterial och fika. Lunch ingår inte.'],
    ['Klädsel', 'Kläder efter väder.'],
    ['Ta med', 'Egen kamera där det går att ställa in bländare, slutartid och ISO, laddat batteri och minneskort. Mobilkamera räcker inte. Extra objektiv och stativ behövs inte.'],
  ]

  return (
    <article className="workshop-details">
      <div className="workshop-details__intro">
        <div className="workshop-details__text">
          <h1>Ta kontroll över din kamera</h1>
          <p>
            En workshop för vuxna nybörjare som vill komma vidare från autoläget.
            Dagen innehåller korta genomgångar och praktiska fotoövningar, både inne och ute.
          </p>
        </div>
        <picture className="workshop-details__image">
          <source media="(min-width: 768px)" srcSet="/images/workshop-info-desktop.png" />
          <img src="/images/workshop-info-mobile.png" alt="Fotograf som fotograferar i en stadsmiljö" />
        </picture>
      </div>

      <dl className="workshop-details__list">
        {details.map(([label, value, extra]) => (
          <div className="workshop-details__row" key={label}>
            <dt>{label}</dt>
            <dd>
              {value}
              {extra && <><br />{extra}</>}
            </dd>
          </div>
        ))}
      </dl>

      <div className="workshop-details__occasions">
        <p className="workshop-details__occasions-title">Tillfällen</p>
        <dl>
          <div>
            <dt>14/11-2026</dt>
            <dd>kl. 10.00–15.00</dd>
          </div>
          <div>
            <dt>21/11-2026</dt>
            <dd>kl. 10.00–15.00</dd>
          </div>
          <div>
            <dt>28/11-26</dt>
            <dd>kl. 10.00–15.00</dd>
          </div>
        </dl>
      </div>

      <a className="workshop-details__button" href="/bokning">
        Vidare till bokning
      </a>
    </article>
  )
}
