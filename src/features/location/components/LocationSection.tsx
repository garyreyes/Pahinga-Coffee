const ADDRESS = '2401 Taft Avenue, Malate, Manila'
// Pinned by coordinates rather than the address string: a plain address query
// makes Google label the pin with the building it resolves to, and a
// name+address query makes it run a search and zoom out to the whole city.
const MAP_EMBED = 'https://www.google.com/maps?q=14.5648,120.9932&z=17&output=embed'
const MAP_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`

const hours = [
  { days: 'Monday – Friday', time: '8:00am – 10:00pm' },
  { days: 'Saturday – Sunday', time: '8:00am – 10:00pm' },
]

export function LocationSection() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <h2 className="text-center font-display text-4xl tracking-[-0.02em] text-[var(--tone-heading)] md:text-5xl">
        Find Us
      </h2>

      <div className="mt-14 flex flex-col gap-12 md:flex-row md:items-center md:gap-16">
        <div className="md:w-3/5">
          <div className="border-8 border-[var(--tone-frame)] p-1 shadow-[0_18px_40px_-24px_rgb(0_0_0/0.8)]">
            <iframe
              src={MAP_EMBED}
              title={`Map showing Pahinga Coffee at ${ADDRESS}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-[4/3] w-full"
            />
          </div>
        </div>

        <div className="md:w-2/5">
          <p className="font-display text-2xl leading-snug text-[var(--tone-heading)]">
            2401 Taft Avenue
            <br />
            Malate, Manila
          </p>

          <dl className="mt-8 border-t border-[var(--tone-rule)]">
            {hours.map((entry) => (
              <div
                key={entry.days}
                className="flex justify-between gap-6 border-b border-[var(--tone-rule)] py-3.5"
              >
                <dt className="text-sm text-[var(--tone-body)]">{entry.days}</dt>
                <dd className="text-right text-sm text-[var(--tone-body)]">
                  {entry.time}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href={MAP_DIRECTIONS}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-block rounded-full border border-[var(--tone-field-border)] px-7 py-3 text-sm font-medium text-[var(--tone-accent)] transition-colors hover:bg-[var(--tone-hover-bg)] hover:text-[var(--tone-hover-fg)]"
          >
            Get Directions
          </a>
        </div>
      </div>
    </div>
  )
}
