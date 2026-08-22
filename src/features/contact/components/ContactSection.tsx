import { ContactForm } from './ContactForm'

export function ContactSection() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <h2 className="text-center font-display text-3xl text-walnut md:text-4xl">
        Say Hello
      </h2>

      <div className="mt-10 flex flex-col gap-10 md:flex-row md:gap-14">
        <div className="md:flex-1">
          <p className="text-ink-muted">
            Booking the long table for a study group, asking about the beans, or
            just saying the coffee was good — it all reaches the same inbox.
          </p>
          <p className="mt-4 text-ink-muted">
            We read everything and usually reply within a day.
          </p>
        </div>

        <div className="md:flex-1">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
