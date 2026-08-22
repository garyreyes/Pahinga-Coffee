import type { MenuCategory } from '../../../lib/types'

type Props = {
  categories: MenuCategory[]
  activeId: string
  onSelect: (id: string) => void
}

export function MenuCategoryTabs({ categories, activeId, onSelect }: Props) {
  return (
    <div role="tablist" className="flex flex-wrap justify-center gap-2">
      {categories.map((category) => {
        const isActive = category.id === activeId
        return (
          <button
            key={category.id}
            role="tab"
            type="button"
            aria-selected={isActive}
            aria-controls={`panel-${category.id}`}
            onClick={() => onSelect(category.id)}
            className={
              isActive
                ? 'border border-[var(--tone-heading)] bg-[var(--tone-heading)] px-4 py-2 text-sm text-[var(--tone-bg)] transition-colors'
                : 'border border-[var(--tone-rule)] px-4 py-2 text-sm text-[var(--tone-body)] transition-colors hover:border-[var(--tone-field-border)] hover:text-[var(--tone-heading)]'
            }
          >
            {category.name}
          </button>
        )
      })}
    </div>
  )
}
