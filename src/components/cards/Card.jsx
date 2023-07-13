import { storePlayer } from '../../store/storePlayer'
import { ESTADO, useCard } from '../../utils/utils'

export const Card = ({ card, index }) => {
  const { diceAtk, setDiceAtk, dice, setDice, setCards, cards, state, setState } = storePlayer()

  const handleUseCard = () => {
    if (![ESTADO.MOVE_OR_CARDS, ESTADO.ATTACK_OR_CARDS].includes(state)) return

    if (state === ESTADO.ATTACK_OR_CARDS) {
      setDiceAtk(useCard(card.img, diceAtk))
      setState(ESTADO.ATTACK)
    }
    if (state === ESTADO.MOVE_OR_CARDS) {
      setDice(useCard(card.img, dice))
      setState(ESTADO.MOVE)
    }

    setCards(cards.filter((x, i) => index !== i))
  }

  return (
    <div onClick={handleUseCard} className='border-4 rounded w-32 h-32 grid place-content-center cursor-pointer hover:-translate-y-3'>
      {card.img}
    </div>
  )
}
