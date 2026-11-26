import { createRootRoute, HeadContent, Outlet } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createRootRoute({
  component: Layout,
  head: () => ({ meta: [{ title: 'Fotoworkshopen' }] }),
  notFoundComponent: () => <h1>Sidan finns inte</h1>,
})

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="site">
      <HeadContent />
      <header className="site-header">
        <a className="site-logo" href="/">Ljusrum</a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Stäng meny' : 'Öppna meny'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          id="primary-navigation"
          className={menuOpen ? 'primary-navigation primary-navigation--open' : 'primary-navigation'}
          aria-label="Huvudmeny"
        >
          <a href="#om-oss">Om oss</a>
          <a className="primary-navigation__button" href="#boka">Boka</a>
        </nav>
      </header>
      <main><Outlet /></main>
      <footer id="om-oss" className="site-footer">
        <div>
          <p className="site-footer__about">Om oss</p>
          <div className="site-footer__details">
            <p>Telefonnummer</p>
            <p>Adress</p>
          </div>
          <p className="site-footer__logo">Ljusrum</p>
        </div>
      </footer>
    </div>
  )
}
