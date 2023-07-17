import slime from '../assets/slime.png'
import spider from '../assets/Araña.png'
import bat from '../assets/murc.png'
export const monster = [
  {
    id: 0,
    type: 'monster',
    name: 'Slime',
    life: 2,
    attack: 1,
    img: slime,
    tier: 1
  },
  {
    id: 1,
    type: 'monster',
    name: 'Muercielago',
    life: 3,
    attack: 1,
    img: bat,
    tier: 1
  },
  {
    id: 2,
    type: 'monster',
    name: 'Araña',
    life: 4,
    attack: 2,
    img: spider,
    tier: 1
  }
]
