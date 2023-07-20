import D1 from '../assets/dados/D1.png'
import D2 from '../assets/dados/D2.png'
import D3 from '../assets/dados/D3.png'
import D4 from '../assets/dados/D4.png'
import D5 from '../assets/dados/D5.png'
import D6 from '../assets/dados/D6.png'

export const randomNum = (num) => {
  return Math.floor(Math.random() * num)
}

export const delay = ms => new Promise(resolve => setTimeout(resolve, (ms * 1000)))

export const ESTADO = {
  ROLL_MOVE: 'ROLL_MOVE',
  MOVE_OR_CARDS: 'MOVE_OR_CARDS',
  MOVE: 'MOVE',
  ROLL_ATTACK: 'ROLL_ATTACK',
  ATTACK_OR_CARDS: 'ATTACK_OR_CARDS',
  ATTACK: 'ATTACK',
  CARDS_CHOISE: 'CARDS',
  EVENT: 'EVENT',
  BOSS_MOVE: 'BOSS_MOVE',
  CHOISE_CARD: 'CHOISE_CARD'
}

export const diceImage = [
  '',
  D1,
  D2,
  D3,
  D4,
  D5,
  D6
]

export const movemente = (tile, dice, index, setActive) => {
  if (tile === null) {
    if (dice === 1 && index === 0) setActive(true)
    if (dice === 2 && index === 0) setActive(true)
    if (dice === 3 && index === 3) setActive(true)
    if (dice === 4 && index === 3) setActive(true)
    if (dice === 5 && index === 6) setActive(true)
    if (dice === 6 && index === 6) setActive(true)
  } else if (tile === 0 || tile === 3 || tile === 6) {
    if (dice === 1 && index === 1) setActive(true)
    if (dice === 2 && index === 1) setActive(true)
    if (dice === 3 && index === 4) setActive(true)
    if (dice === 4 && index === 4) setActive(true)
    if (dice === 5 && index === 7) setActive(true)
    if (dice === 6 && index === 7) setActive(true)
  } else if (tile === 1 || tile === 4 || tile === 7) {
    if (dice === 1 && index === 2) setActive(true)
    if (dice === 2 && index === 2) setActive(true)
    if (dice === 3 && index === 5) setActive(true)
    if (dice === 4 && index === 5) setActive(true)
    if (dice === 5 && index === 8) setActive(true)
    if (dice === 6 && index === 8) setActive(true)
  }
}

export const UseCard = (card, dice) => {
  if (card === '+1') { return dice + 1 }
  if (card === '-1') { return dice - 1 }
  if (card === '+2') { return dice + 2 }
  if (card === '-2') { return dice - 2 }
  if (card === 'x2') { return dice * 2 }
  if (card === 'R') { return null }
  if (card === 'V') {
    if (dice === 1) { return 6 }
    if (dice === 2) { return 5 }
    if (dice === 3) { return 4 }
    if (dice === 4) { return 3 }
    if (dice === 5) { return 2 }
    if (dice === 6) { return 1 }
  }
}
