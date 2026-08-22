import type { MenuItem } from '../../../lib/types'
import { CaffeineLevel } from './CaffeineLevel'

const SERVE_LABEL: Record<NonNullable<MenuItem['serve']>, string> = {
  'hot-or-iced': 'Hot or iced',
  'iced-only': 'Iced only',
  'hot-only': 'Hot only',
}

type Props = {
  item: MenuItem
  className?: string
}

export function MenuItemCard({ item, className = '' }: Props) {
  return (
    <li className={`group ${className}`}>
      {item.image && (
        // Cream mat inside the frame, like a matted print. Several of the
        // photos have dark or brown backgrounds of their own and blended
        // straight into the walnut ground without it.
        <div className="border-4 border-[var(--tone-frame)] bg-paper-card p-2.5">
          <div className="overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      )}
      <div className="mt-4">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-lg text-[var(--tone-heading)]">
            {item.name}
          </h3>
          <span className="shrink-0 text-sm text-[var(--tone-body)]">
            ₱{item.price}
          </span>
        </div>
        <p className="mt-1.5 text-sm text-[var(--tone-body)]">{item.description}</p>
        <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1">
          {item.serve && (
            <span className="text-xs tracking-wide text-[var(--tone-body)]">
              {SERVE_LABEL[item.serve]}
            </span>
          )}
          {item.caffeine !== undefined && <CaffeineLevel level={item.caffeine} />}
        </div>
      </div>
    </li>
  )
}
