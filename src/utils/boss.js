import Slime from '../assets/Slime03.svg'
import Spider from '../assets/Araña.png'
import Bat from '../assets/murc.png'

export const bosses = [
  {
    id: 0,
    type: 'boss',
    name: 'Slime',
    life: 1,
    chance: [2, 4, 6],
    attack: 2,
    img: Slime,
    tier: 1
  },
  {
    id: 1,
    type: 'boss',
    name: 'Spider',
    life: 1,
    chance: [2, 4, 6],
    attack: 2,
    img: Spider,
    tier: 1
  },
  {
    id: 2,
    type: 'boss',
    name: 'Slime',
    life: 1,
    chance: [2, 4, 6],
    attack: 2,
    img: Bat,
    tier: 1
  }
]
