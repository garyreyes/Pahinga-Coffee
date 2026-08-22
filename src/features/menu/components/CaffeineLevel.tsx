export function CaffeineLevel({ level }: { level: number }) {
  if (level === 0) {
    return <span className="text-xs text-ink-muted">Caffeine-free</span>
  }

  return (
    <span className="flex items-center gap-1.5">
      <span className="text-xs text-ink-muted">Caffeine</span>
      <span className="flex gap-0.5" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((step) => (
          <span
            key={step}
            className={`h-1.5 w-1.5 rounded-full ${
              step <= level ? 'bg-brass' : 'bg-walnut/20'
            }`}
          />
        ))}
      </span>
      <span className="sr-only">{level} out of 5</span>
    </span>
  )
}
