import { useState } from 'react'
import { menu } from '../../../lib/content'
import { MenuCategoryTabs } from './MenuCategoryTabs'
import { MenuItemCard } from './MenuItemCard'

export function MenuSection() {
  const [activeId, setActiveId] = useState(menu[0].id)
  const activeCategory = menu.find((category) => category.id === activeId) ?? menu[0]
  const hasImages = activeCategory.items.some((item) => item.image)

  return (
    <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <h2 className="text-center font-display text-4xl tracking-[-0.02em] text-[var(--tone-heading)] md:text-5xl">
        The Menu
      </h2>

      <div className="mt-10">
        <MenuCategoryTabs
          categories={menu}
          activeId={activeId}
          onSelect={setActiveId}
        />
      </div>

      {/* flex-wrap rather than grid so a category whose item count doesn't
          fill the last row centres the remainder instead of stranding it
          against the left edge with a dead gap beside it. */}
      <ul
        id={`panel-${activeCategory.id}`}
        role="tabpanel"
        className={
          hasImages
            ? 'mt-14 flex flex-wrap justify-center gap-x-8 gap-y-14'
            : 'mx-auto mt-14 flex max-w-2xl flex-wrap justify-center gap-x-8 gap-y-6'
        }
      >
        {activeCategory.items.map((item) => (
          <MenuItemCard
            key={item.name}
            item={item}
            className={
              hasImages
                ? 'w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]'
                : 'w-full sm:w-[calc(50%-1rem)]'
            }
          />
        ))}
      </ul>
    </div>
  )
}
