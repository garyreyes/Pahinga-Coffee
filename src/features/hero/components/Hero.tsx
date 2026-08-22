import heroCafe from '../../../assets/hero-cafe.jpg'

function scrollToMenu() {
  document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
}

export function Hero() {
  return (
    // Photo: Resky Fernanda, Unsplash License (unsplash.com/photos/BZnJ20sEeao) — no attribution required, credited here as good practice.
    <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 py-20 md:flex-row md:py-28">
      <div className="flex-1 text-center md:text-left">
        <h1 className="font-display text-4xl text-walnut md:text-5xl">Pahinga Coffee</h1>
        <p className="mt-4 text-lg text-ink-muted">
          Coffee, quiet corners, and a good reason to stay a while.
        </p>
        <button
          type="button"
          onClick={scrollToMenu}
          className="mt-8 inline-block rounded-full border border-walnut-light px-6 py-2.5 text-sm font-medium text-brass transition-colors hover:bg-walnut hover:text-paper"
        >
          See the Menu
        </button>
      </div>
      <div className="w-full max-w-sm flex-1 md:max-w-none">
        <div className="border-8 border-walnut p-1">
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
