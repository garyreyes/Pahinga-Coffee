import { Nav } from './shared/components/Nav'
import { Footer } from './shared/components/Footer'
import { Hero } from './features/hero/components/Hero'
import { MenuSection } from './features/menu/components/MenuSection'

function PlaceholderSection({ id, label }: { id: string; label: string }) {
  return (
    <section
      id={id}
      className="flex min-h-screen items-center justify-center px-6 text-center text-ink-muted"
    >
      {label}
    </section>
  )
}

function App() {
  return (
    <div className="bg-paper text-ink">
      <Nav />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="menu">
          <MenuSection />
        </section>
        <PlaceholderSection id="about" label="About section — coming in sub-phase 1e" />
        <PlaceholderSection id="location" label="Location section — coming in sub-phase 1f" />
        <PlaceholderSection id="contact" label="Contact section — coming in sub-phase 1g" />
      </main>
      <Footer />
    </div>
  )
}

export default App
