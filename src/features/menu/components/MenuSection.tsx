import { useState } from 'react'
import { menu } from '../../../lib/content'
import { MenuCategoryTabs } from './MenuCategoryTabs'
import { MenuItemCard } from './MenuItemCard'

export function MenuSection() {
  const [activeId, setActiveId] = useState(menu[0].id)
  const activeCategory = menu.find((category) => category.id === activeId) ?? menu[0]
  const hasImages = activeCategory.items.some((item) => item.image)

  return (
    <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <h2 className="text-center font-display text-3xl text-walnut md:text-4xl">
        The Menu
      </h2>

      <div className="mt-8">
        <MenuCategoryTabs
          categories={menu}
          activeId={activeId}
          onSelect={setActiveId}
        />
      </div>

      <ul
        id={`panel-${activeCategory.id}`}
        role="tabpanel"
        className={
          hasImages
            ? 'mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3'
            : 'mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2'
        }
      >
        {activeCategory.items.map((item) => (
          <MenuItemCard key={item.name} item={item} />
        ))}
      </ul>
    </div>
  )
}
