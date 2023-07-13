import { ESTADO } from '../../utils/utils'
import { storePlayer } from '../../store/storePlayer'
import { DiceAttack } from './DiceAttack'
import { DiceMove } from './DiceMove'

export const DiceContainer = () => {
  const { state } = storePlayer()

  return (
    <div className='div7 outline outline-yellow-900'>
      <div className='flex justify-center items-center h-full'>
        {
          [ESTADO.ROLL_ATTACK, ESTADO.ATTACK, ESTADO.ATTACK_OR_CARDS].includes(state)
            ? <DiceAttack />
            : <DiceMove />
        }
      </div>
    </div>
  )
}
