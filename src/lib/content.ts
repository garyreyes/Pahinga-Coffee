import type { MenuCategory } from './types'

import americano from '../assets/menu/americano.jpg'
import cafeLatte from '../assets/menu/cafe-latte.jpg'
import caramelMacchiato from '../assets/menu/caramel-macchiato.jpg'
import coffeeJellyLatte from '../assets/menu/coffee-jelly-latte.jpg'
import spanishLatte from '../assets/menu/spanish-latte.jpg'
import seaSaltSpanishLatte from '../assets/menu/sea-salt-spanish-latte.jpg'
import buttercremeLatte from '../assets/menu/buttercreme-latte.jpg'
import dirtyMatchaLatte from '../assets/menu/dirty-matcha-latte.jpg'
import icedSeaSaltMatcha from '../assets/menu/iced-sea-salt-matcha.jpg'
import strawberryMatchaLatte from '../assets/menu/strawberry-matcha-latte.jpg'
import ubeCreamLatte from '../assets/menu/ube-cream-latte.jpg'
import pinkLemonade from '../assets/menu/pink-lemonade.jpg'
import butterCroissant from '../assets/menu/butter-croissant.jpg'
import croffle from '../assets/menu/croffle.jpg'
import ensaymada from '../assets/menu/ensaymada.jpg'
import chocolateCake from '../assets/menu/chocolate-cake.jpg'
import basqueCheesecake from '../assets/menu/basque-cheesecake.jpg'

export const menu: MenuCategory[] = [
  {
    id: 'espresso-classics',
    name: 'Espresso & Coffee Classics',
    items: [
      {
        name: 'Americano',
        description: 'Double shot espresso diluted with water.',
        price: 120,
        variants: ['Hot', 'Iced'],
        caffeine: 4,
        image: americano,
      },
      {
        name: 'Café Latte',
        description: 'Smooth espresso layered with fresh milk.',
        price: 140,
        variants: ['Hot', 'Iced'],
        caffeine: 3,
        image: cafeLatte,
      },
      {
        name: 'Caramel Macchiato',
        description:
          'Espresso with steamed milk, vanilla, and a sweet caramel drizzle.',
        price: 155,
        variants: ['Hot', 'Iced'],
        caffeine: 3,
        image: caramelMacchiato,
      },
      {
        name: 'Iced Coffee Jelly Latte',
        description:
          'Classic espresso latte layered with chewy house-made coffee jelly.',
        price: 165,
        caffeine: 3,
        image: coffeeJellyLatte,
      },
    ],
  },
  {
    id: 'local-signatures',
    name: 'Local Signatures & Specialty Lattes',
    items: [
      {
        name: 'Spanish Latte',
        description:
          'The local staple: double espresso layered with fresh milk and sweetened condensed milk.',
        price: 150,
        variants: ['Hot', 'Iced'],
        caffeine: 4,
        image: spanishLatte,
      },
      {
        name: 'Sea Salt Spanish Latte',
        description:
          'Signature Spanish latte finished with a thick cap of savory sea salt cold foam.',
        price: 175,
        variants: ['Iced'],
        caffeine: 4,
        image: seaSaltSpanishLatte,
      },
      {
        name: 'Buttercreme Latte',
        description: 'Espresso blended with a buttery caramel sauce.',
        price: 160,
        variants: ['Hot', 'Iced'],
        caffeine: 3,
        image: buttercremeLatte,
      },
      {
        name: 'Dirty Matcha Latte',
        description:
          'Whisked Japanese matcha poured over a shot of espresso and milk.',
        price: 175,
        variants: ['Hot', 'Iced'],
        caffeine: 4,
        image: dirtyMatchaLatte,
      },
    ],
  },
  {
    id: 'tea-refreshers',
    name: 'Tea, Refreshers & Non-Coffee',
    items: [
      {
        name: 'Iced Sea Salt Matcha',
        description: 'Rich matcha latte topped with a layer of salted cream foam.',
        price: 180,
        variants: ['Iced'],
        caffeine: 2,
        image: icedSeaSaltMatcha,
      },
      {
        name: 'Strawberry Matcha Latte',
        description:
          'Real strawberry fruit puree layered with milk and Japanese matcha.',
        price: 190,
        variants: ['Iced'],
        caffeine: 2,
        image: strawberryMatchaLatte,
      },
      {
        name: 'Ube Cream Latte',
        description:
          'Creamy milk infusion made with sweet purple yam and subtle vanilla.',
        price: 165,
        variants: ['Hot', 'Iced'],
        caffeine: 0,
        image: ubeCreamLatte,
      },
      {
        name: 'Pink Lemonade / Berry Refresher',
        description:
          'Zesty cold-pressed lemonade blended with a splash of fruit tea.',
        price: 130,
        variants: ['Iced'],
        caffeine: 0,
        image: pinkLemonade,
      },
    ],
  },
  {
    id: 'add-ons',
    name: 'Add-Ons & Customizations',
    items: [
      {
        name: 'Extra Espresso Shot',
        description: 'Single-origin house blend.',
        price: 40,
      },
      {
        name: 'Sea Salt Cold Foam',
        description: 'Savory-sweet cream top layer.',
        price: 50,
      },
      {
        name: 'Plant-Based Milk',
        description: 'Oat milk or almond milk.',
        price: 40,
      },
      {
        name: 'Flavored Syrups',
        description: 'Hazelnut, vanilla, caramel, or brown sugar.',
        price: 30,
      },
    ],
  },
  {
    id: 'pastries',
    name: 'Pastries & Bakes',
    items: [
      {
        name: 'Classic Butter Croissant',
        description: 'Flaky, golden, and baked fresh in-house daily.',
        price: 110,
        image: butterCroissant,
      },
      {
        name: 'Flaky Croffle',
        description:
          'Croissant-waffle hybrid dusted with cinnamon sugar or drizzled with caramel.',
        price: 135,
        image: croffle,
      },
      {
        name: 'Cheesy Ensaymada / Cheese Roll',
        description:
          'Soft brioche topped with whipped butter, sugar, and grated cheese.',
        price: 120,
        image: ensaymada,
      },
      {
        name: 'Fudgy Dark Chocolate Cake',
        description: 'Rich, moist chocolate cake slice layered with ganache.',
        price: 165,
        image: chocolateCake,
      },
      {
        name: 'Basque Burnt Cheesecake',
        description:
          'Crustless cheesecake with a caramelized top and creamy center.',
        price: 180,
        image: basqueCheesecake,
      },
    ],
  },
]
