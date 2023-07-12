import { storePlayer } from '../../store/storePlayer'
import { ESTADO, useCard } from '../../utils/utils'

export const Card = ({ card, index }) => {
  const { dice, setDice, setCards, cards, state, setState } = storePlayer()

  const handleUseCard = () => {
    if (state !== ESTADO.MOVE_OR_CARDS) return

    setDice(useCard(card.img, dice))
    setCards(cards.filter((x, i) => index !== i))
    setState(ESTADO.MOVE)
  }

  return (
    <div onClick={handleUseCard} className='border-4 rounded w-32 h-32 grid place-content-center cursor-pointer hover:-translate-y-3'>
      {card.img}
    </div>
  )
}
