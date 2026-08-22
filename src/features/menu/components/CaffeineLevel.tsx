export function CaffeineLevel({ level }: { level: number }) {
  if (level === 0) {
    return (
      <span className="text-xs text-[var(--tone-body)]">Caffeine-free</span>
    )
  }

  return (
    <span className="flex items-center gap-1.5">
      <span className="text-xs text-[var(--tone-body)]">Caffeine</span>
      <span className="flex gap-0.5" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((step) => (
          <span
            key={step}
            className={
              step <= level
                ? 'h-1.5 w-1.5 rounded-full bg-[var(--tone-accent)]'
                : 'h-1.5 w-1.5 rounded-full bg-[var(--tone-rule)]'
            }
          />
        ))}
      </span>
      <span className="sr-only">{level} out of 5</span>
    </span>
  )
}
