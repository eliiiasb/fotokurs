import { createFileRoute } from '@tanstack/react-router'
import { WorkshopCard } from '../components/WorkshopCard'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <picture className="hero__image">
          <source media="(min-width: 768px)" srcSet="/images/hero-desktop.png" />
          <img src="/images/hero-mobile.png" alt="" />
        </picture>
        <div className="hero__content">
          <h1 id="hero-title">
            Fotoworkshops för dig med en kamera och ambition
          </h1>
          <p>
            Vi erbjuder workshops för olika ändamål. Allt från natur- och stadsmiljöer till event och professionella produktbilder.
          </p>
        </div>
      </section>
      <section id="boka" className="home-workshop" aria-label="Kommande workshop">
        <WorkshopCard />
      </section>
    </>
  )
}
