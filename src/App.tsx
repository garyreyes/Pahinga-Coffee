import { Nav } from './shared/components/Nav'
import { Footer } from './shared/components/Footer'
import { Hero } from './features/hero/components/Hero'
import { MenuSection } from './features/menu/components/MenuSection'
import { AboutSection } from './features/about/components/AboutSection'
import { LocationSection } from './features/location/components/LocationSection'
import { ContactSection } from './features/contact/components/ContactSection'

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
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
