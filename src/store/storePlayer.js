import { create } from 'zustand'
import { ESTADO, randomNum } from '../utils/utils'
import { mazoCards } from '../utils/cards'

export const storePlayer = create((set, get) => ({
  life: 5,
  setLife: (value) => set(state => ({ life: value })),
  attack: 3,
  setAttack: (value) => set(state => ({ attack: value })),
  dice: null,
  setDice: (value) => set(state => ({ dice: value })),
  diceAtk: null,
  setDiceAtk: (value) => set(state => ({ diceAtk: value })),
  tile: 10,
  setTile: (value) => set(state => ({ tile: value })),
  level: 0,
  setLevel: (value) => set(state => ({ level: value })),
  monster: [],
  setMonster: (value) => set(state => ({ monster: value })),
  cards: new Array(3).fill('').map(x => mazoCards[randomNum(mazoCards.length)]),
  setCards: (value) => set(state => ({ cards: value })),
  state: ESTADO.ROLL_MOVE,
  setState: (value) => set(state => ({ state: value })),
  boss: {},
  setBoss: (value) => set(state => ({ boss: value }))

}))
