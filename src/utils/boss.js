import Slime from '../assets/Slime03.svg'
import Spider from '../assets/Araña.png'
import Bat from '../assets/murc.png'

export const bosses = [
  {
    id: 0,
    type: 'boss',
    name: 'Slime',
    life: 2,
    chance: [2, 4, 6],
    attack: 1,
    img: Slime,
    tier: 1
  },
  {
    id: 1,
    type: 'boss',
    name: 'Slime',
    life: 3,
    chance: [3, 5],
    attack: 1,
    img: Bat,
    tier: 1
  },
  {
    id: 2,
    type: 'boss',
    name: 'Spider',
    life: 5,
    chance: [6],
    attack: 2,
    img: Spider,
    tier: 1
  }
]
