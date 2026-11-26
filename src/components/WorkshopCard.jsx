import './WorkshopCard.css'

export function WorkshopCard({
  title = 'Ta kontroll över din kamera',
  description = 'En workshop för vuxna nybörjare som vill komma vidare från autoläget.',
  href = '/workshop',
}) {
  return (
    <article className="workshop-card">
      <h2 className="workshop-card__title">{title}</h2>
      <picture className="workshop-card__image">
        <source
          media="(min-width: 768px)"
          srcSet="/images/workshop-desktop.png"
        />
        <img
          src="/images/workshop-mobile.png"
          alt="Fotograf som fotograferar i en stadsmiljö"
        />
      </picture>
      <p className="workshop-card__description">{description}</p>
      <a className="workshop-card__button" href={href}>
        Läs mer och boka här
      </a>
    </article>
  )
}
