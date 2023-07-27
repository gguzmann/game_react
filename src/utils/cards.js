import DadoFlip from '../assets/cardImages/DadoFlip.png'
import DadoMas1 from '../assets/cardImages/DadoMas1.png'
import DadoMas2 from '../assets/cardImages/DadoMas2.png'
import DadoMenos1 from '../assets/cardImages/DadoMenos1.png'
import DadoMenos2 from '../assets/cardImages/DadoMenos2.png'
import DadoVolveraTirar from '../assets/cardImages/DadoVolveraTirar.png'

export const mazoCards = [
  {
    id: 0,
    type: 'card',
    name: 'V',
    img: DadoFlip
  },
  {
    id: 1,
    type: 'card',
    name: 'R',
    img: DadoVolveraTirar
  },
  {
    id: 2,
    type: 'card',
    name: '+1',
    img: DadoMas1
  },
  {
    id: 3,
    type: 'card',
    name: '-1',
    img: DadoMenos1
  },
  {
    id: 5,
    type: 'card',
    name: '+2',
    img: DadoMas2
  },
  {
    id: 6,
    type: 'card',
    name: '-2',
    img: DadoMenos2
  }
  // {
  //   id: 6,
  //   type: 'card',
  //   name: 'x2',
  //   img: 'x2'
  // }
]
