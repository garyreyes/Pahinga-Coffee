import heroCafe from '../../../assets/hero-cafe.jpg'

function scrollToMenu() {
  document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
}

export function Hero() {
  return (
    // Photo: Resky Fernanda, Unsplash License (unsplash.com/photos/BZnJ20sEeao) — no attribution required, credited here as good practice.
    <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 px-6 py-24 md:flex-row md:gap-16 md:py-32">
      <div className="flex-1 text-center md:text-left">
        <h1 className="font-display text-5xl leading-[1.05] tracking-[-0.02em] text-[var(--tone-heading)] md:text-7xl">
          Pahinga
          <br />
          Coffee
        </h1>
        <p className="mt-6 max-w-sm text-lg text-[var(--tone-body)] md:mx-0">
          Coffee, quiet corners, and a good reason to stay a while.
        </p>
        <button
          type="button"
          onClick={scrollToMenu}
          className="mt-9 inline-block rounded-full border border-[var(--tone-field-border)] px-7 py-3 text-sm font-medium text-[var(--tone-accent)] transition-colors hover:bg-[var(--tone-hover-bg)] hover:text-[var(--tone-hover-fg)]"
        >
          See the Menu
        </button>
      </div>
      <div className="w-full max-w-sm flex-1 md:max-w-none">
        <div className="border-8 border-[var(--tone-frame)] p-1 shadow-[0_18px_40px_-24px_rgb(43_29_19/0.7)]">
          <img
            src={heroCafe}
            alt="A warm, book-lined café corner with a wood-fired espresso bar"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
