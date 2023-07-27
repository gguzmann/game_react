import { storePlayer } from '../../store/storePlayer'
import { ESTADO, UseCard } from '../../utils/utils'

export const Card = ({ card, index }) => {
  const { diceAtk, setDiceAtk, dice, setDice, setCards, cards, state, setState } = storePlayer()

  const handleUseCard = () => {
    if (![ESTADO.MOVE_OR_CARDS, ESTADO.ATTACK_OR_CARDS].includes(state)) return

    if (state === ESTADO.ATTACK_OR_CARDS) {
      const numCard = UseCard(card.name, diceAtk)
      if (numCard) {
        setDiceAtk(numCard)
        setState(ESTADO.ATTACK)
      } else {
        setDiceAtk(null)
        setState(ESTADO.ROLL_ATTACK)
      }
    }
    if (state === ESTADO.MOVE_OR_CARDS) {
      const numCard = UseCard(card.name, dice)
      if (numCard) {
        setDice(numCard)
        setState(ESTADO.MOVE)
      } else {
        setDice(null)
        setState(ESTADO.ROLL_MOVE)
      }
    }

    setCards(cards.filter((x, i) => index !== i))
  }

  return (
    <div onClick={handleUseCard} className='rounded w-28 h-32 grid place-content-center cursor-pointer hover:-translate-y-3'>
      <img src={card.img} alt='' />
    </div>
  )
}
