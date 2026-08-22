import { useActiveSection } from '../hooks/useActiveSection'

const links = [
  { id: 'menu', label: 'Menu' },
  { id: 'about', label: 'About' },
  { id: 'location', label: 'Location' },
  { id: 'contact', label: 'Contact' },
]

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function Nav() {
  const activeId = useActiveSection(links.map((link) => link.id))

  return (
    <nav className="sticky top-0 z-50 border-b border-walnut-light bg-paper">
      <ul className="mx-auto flex max-w-3xl items-center justify-center gap-6 px-6 py-4 text-sm font-medium">
        {links.map((link) => (
          <li key={link.id}>
            <button
              type="button"
              onClick={() => scrollToSection(link.id)}
              className={
                activeId === link.id
                  ? 'text-brass'
                  : 'text-ink-muted transition-colors hover:text-ink'
              }
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
