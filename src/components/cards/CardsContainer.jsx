import { storePlayer } from '../../store/storePlayer'
import { ESTADO } from '../../utils/utils'
import { Card } from './Card'

export const CardsContainer = () => {
  const { cards, state } = storePlayer()
  return (
    <div className='div6 outline outline-yellow-500'>
      <div className='flex justify-around items-center h-full overflow-hidden'>
        <div className={`flex gap-3 h-full justify-center items-center ${![ESTADO.MOVE_OR_CARDS, ESTADO.ATTACK_OR_CARDS].includes(state) && 'translate-y-20'}`}>
          {
            cards.map((card, i) => <Card key={i} card={card} index={i} />)
          }
        </div>
        <div />
      </div>
    </div>
  )
}
