import { ContactForm } from './ContactForm'

export function ContactSection() {
  return (
    // Narrow centred column rather than a two-column split: the copy is short,
    // and a 50/50 row left a dead half-width column beside it.
    <div className="mx-auto max-w-xl px-6 py-24 md:py-32">
      <h2 className="text-center font-display text-4xl tracking-[-0.02em] text-[var(--tone-heading)] md:text-5xl">
        Say Hello
      </h2>

      <p className="mx-auto mt-6 max-w-md text-center text-[var(--tone-body)]">
        Booking the long table for a study group, asking about the beans, or
        just saying the coffee was good — it all reaches the same inbox, and we
        usually reply within a day.
      </p>

      <div className="mt-12">
        <ContactForm />
      </div>
    </div>
  )
}
