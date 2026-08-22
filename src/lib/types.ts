export type MenuItem = {
  name: string
  description: string
  /** Philippine pesos. */
  price: number
  /**
   * How the drink is served. Stated explicitly on every drink rather than
   * left implicit: an omitted label reads as "unlabelled", not as
   * "iced only", which is the ambiguity this replaced. Omit only for
   * items where temperature isn't an axis (pastries, add-ons).
   */
  serve?: 'hot-or-iced' | 'iced-only' | 'hot-only'
  /** 0–5. Omitted for items where caffeine isn't a meaningful axis (pastries). */
  caffeine?: number
  image?: string
}

export type MenuCategory = {
  id: string
  name: string
  items: MenuItem[]
}
