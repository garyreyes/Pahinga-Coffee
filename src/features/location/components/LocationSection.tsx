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
    <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <h2 className="text-center font-display text-3xl text-walnut md:text-4xl">
        Find Us
      </h2>

      <div className="mt-10 flex flex-col gap-10 md:flex-row md:gap-14">
        <div className="md:flex-1">
          <div className="border-8 border-walnut p-1">
            <iframe
              src={MAP_EMBED}
              title={`Map showing Pahinga Coffee at ${ADDRESS}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-square w-full"
            />
          </div>
        </div>

        <div className="md:flex-1">
          <h3 className="text-sm tracking-wide text-walnut">Address</h3>
          <p className="mt-2 text-ink-muted">
            2401 Taft Avenue
            <br />
            Malate, Manila
          </p>

          <h3 className="mt-8 text-sm tracking-wide text-walnut">Hours</h3>
          <dl className="mt-2 border-t border-walnut/20">
            {hours.map((entry) => (
              <div
                key={entry.days}
                className="flex justify-between gap-6 border-b border-walnut/20 py-3"
              >
                <dt className="text-sm text-ink-muted">{entry.days}</dt>
                <dd className="text-right text-sm text-ink-muted">
                  {entry.time}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href={MAP_DIRECTIONS}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full border border-walnut-light px-6 py-2.5 text-sm font-medium text-brass transition-colors hover:bg-walnut hover:text-paper"
          >
            Get Directions
          </a>
        </div>
      </div>
    </div>
  )
}
