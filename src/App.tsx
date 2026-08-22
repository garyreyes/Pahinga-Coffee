import { Nav } from './shared/components/Nav'
import { Footer } from './shared/components/Footer'
import { Hero } from './features/hero/components/Hero'
import { MenuSection } from './features/menu/components/MenuSection'
import { AboutSection } from './features/about/components/AboutSection'
import { LocationSection } from './features/location/components/LocationSection'
import { ContactSection } from './features/contact/components/ContactSection'

function App() {
  return (
    <div>
      <Nav />
      <main>
        {/* Sections alternate light/dark grounds so the scroll has rhythm
            rather than one continuous flat field. See src/index.css. */}
        <section id="hero" className="tone-light">
          <Hero />
        </section>
        <section id="menu" className="tone-dark">
          <MenuSection />
        </section>
        <section id="about" className="tone-light">
          <AboutSection />
        </section>
        <section id="location" className="tone-dark">
          <LocationSection />
        </section>
        <section id="contact" className="tone-light">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
