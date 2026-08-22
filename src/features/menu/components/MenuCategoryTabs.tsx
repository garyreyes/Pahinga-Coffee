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
            className={`border px-4 py-2 text-sm transition-colors ${
              isActive
                ? 'border-walnut bg-walnut text-paper'
                : 'border-walnut/30 text-ink-muted hover:border-walnut/60 hover:text-ink'
            }`}
          >
            {category.name}
          </button>
        )
      })}
    </div>
  )
}
