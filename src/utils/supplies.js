import imgLife from '../assets/Corazon.png'
import DadoMas1 from '../assets/cartas/DadoMas1.png'
import DadoMas2 from '../assets/cartas/DadoMas2.png'
import DadoMenos1 from '../assets/cartas/DadoMenos1.png'
export const supplies = [
  {
    id: 0,
    type: 'supplie',
    name: 'Life',
    description: '+1 life',
    img: imgLife
  },
  {
    id: 1,
    type: 'supplie',
    name: 'Attack',
    description: '+1 Attack',
    img: 'https://cdn2.iconfinder.com/data/icons/gaming-solid/32/sword_battle_rpg_weapon_attack_game-512.png'
  },
  {
    id: 2,
    type: 'supplie',
    name: '+1',
    description: '+1 Dice',
    img: DadoMas1
  },
  {
    id: 3,
    type: 'supplie',
    name: '+2',
    description: '+2 Dice',
    img: DadoMas2
  },
  {
    id: 4,
    type: 'supplie',
    name: '-1',
    description: '-1 Dice',
    img: DadoMenos1
  }
]
