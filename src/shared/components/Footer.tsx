import { SocialBadges } from './SocialBadges'

export function Footer() {
  return (
    <footer className="border-t border-walnut-light bg-walnut-deep px-6 py-14 text-center">
      <SocialBadges />
      <p className="mt-8 text-sm text-paper-muted">
        A concept landing page design — portfolio site coming soon.
      </p>
    </footer>
  )
}
