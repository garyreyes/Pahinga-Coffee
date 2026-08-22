export type MenuItem = {
  name: string
  description: string
  /** Philippine pesos. */
  price: number
  /** e.g. ["Hot", "Iced"] — omitted when the drink comes only one way. */
  variants?: string[]
  /** 0–5. Omitted for items where caffeine isn't a meaningful axis (pastries). */
  caffeine?: number
  image?: string
}

export type MenuCategory = {
  id: string
  name: string
  items: MenuItem[]
}
