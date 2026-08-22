import type { MenuItem } from '../../../lib/types'
import { CaffeineLevel } from './CaffeineLevel'

export function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <li className="group">
      {item.image && (
        <div className="overflow-hidden border-4 border-walnut/80">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="mt-3">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-lg text-walnut">{item.name}</h3>
          <span className="shrink-0 text-sm text-ink-muted">₱{item.price}</span>
        </div>
        <p className="mt-1 text-sm text-ink-muted">{item.description}</p>
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
          {item.variants && (
            <span className="text-xs tracking-wide text-ink-muted">
              {item.variants.join(' · ')}
            </span>
          )}
          {item.caffeine !== undefined && <CaffeineLevel level={item.caffeine} />}
        </div>
      </div>
    </li>
  )
}
