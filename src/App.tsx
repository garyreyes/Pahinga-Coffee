import { Nav } from './shared/components/Nav'
import { Footer } from './shared/components/Footer'

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
        <section
          id="hero"
          className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
        >
          <h1 className="font-display text-4xl text-walnut">Pahinga Coffee</h1>
          <p className="mt-3 text-ink-muted">
            Design tokens ready — sections land in the next sub-phases.
          </p>
          <span className="mt-6 inline-block rounded-full border border-walnut-light px-4 py-1.5 text-sm text-brass">
            Accent example (active state)
          </span>
        </section>
        <PlaceholderSection id="menu" label="Menu section — coming in sub-phase 1d" />
        <PlaceholderSection id="about" label="About section — coming in sub-phase 1e" />
        <PlaceholderSection id="location" label="Location section — coming in sub-phase 1f" />
        <PlaceholderSection id="contact" label="Contact section — coming in sub-phase 1g" />
      </main>
      <Footer />
    </div>
  )
}

export default App
