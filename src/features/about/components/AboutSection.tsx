import aboutCorner from '../../../assets/about-corner.jpg'

const details = [
  { label: 'Wi-Fi', value: 'Free, and fast enough for calls' },
  { label: 'Outlets', value: 'At every table, not just the wall seats' },
  { label: 'Table time', value: 'No limit — the table is yours' },
  { label: 'Sound', value: 'Low music, quieter past 6pm' },
]

export function AboutSection() {
  return (
    // Photo: Claire (@ngnng), Unsplash License (unsplash.com/photos/TIO35YHf0ik)
    <div className="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-24 md:flex-row md:items-center md:gap-16 md:py-32">
      <div className="w-full max-w-sm self-center md:max-w-none md:flex-1">
        <div className="border-8 border-[var(--tone-frame)] p-1 shadow-[0_18px_40px_-24px_rgb(43_29_19/0.7)]">
          <img
            src={aboutCorner}
            alt="A dim corner of the café, lit by a single warm lamp"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
      </div>

      <div className="md:flex-1">
        <h2 className="font-display text-4xl tracking-[-0.02em] text-[var(--tone-heading)] md:text-5xl">
          Pahinga means rest
        </h2>
        <p className="mt-6 text-[var(--tone-body)]">
          We built this room for the part of the day that isn't urgent. The
          lights stay low, the wood stays warm, and nobody hovers near your
          table waiting for it back.
        </p>
        <p className="mt-4 text-[var(--tone-body)]">
          Half of it reads like a study hall — long shared tables, shelves worth
          browsing, the quiet hum of people actually getting something done. The
          other half is just a good place to sit with a drink and let the
          afternoon go by.
        </p>

        <dl className="mt-10 border-t border-[var(--tone-rule)]">
          {details.map((detail) => (
            <div
              key={detail.label}
              className="flex justify-between gap-6 border-b border-[var(--tone-rule)] py-3.5"
            >
              <dt className="text-sm tracking-wide text-[var(--tone-heading)]">
                {detail.label}
              </dt>
              <dd className="text-right text-sm text-[var(--tone-body)]">
                {detail.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
