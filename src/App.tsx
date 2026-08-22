import { Nav } from './shared/components/Nav'
import { Footer } from './shared/components/Footer'
import { Hero } from './features/hero/components/Hero'
import { MenuSection } from './features/menu/components/MenuSection'
import { AboutSection } from './features/about/components/AboutSection'
import { LocationSection } from './features/location/components/LocationSection'

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
        <section id="about">
          <AboutSection />
        </section>
        <section id="location">
          <LocationSection />
        </section>
        <PlaceholderSection id="contact" label="Contact section — coming in sub-phase 1g" />
      </main>
      <Footer />
    </div>
  )
}

export default App
