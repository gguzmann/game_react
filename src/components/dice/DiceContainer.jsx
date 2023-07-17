import { ESTADO } from '../../utils/utils'
import { storePlayer } from '../../store/storePlayer'
import { DiceAttack } from './DiceAttack'
import { DiceMove } from './DiceMove'

export const DiceContainer = () => {
  const { state, setState } = storePlayer()

  const handleBoss = () => setState(ESTADO.BOSS_ATTACK)

  return (
    <div className='div7 outline outline-yellow-900'>
      <div className='flex justify-center items-center h-full'>
        {[ESTADO.MOVE, ESTADO.MOVE_OR_CARDS, ESTADO.ROLL_MOVE].includes(state) && <DiceMove />}
        {[ESTADO.ROLL_ATTACK, ESTADO.ATTACK, ESTADO.ATTACK_OR_CARDS].includes(state) && <DiceAttack />}
        {[ESTADO.BOSS_MOVE].includes(state) &&
          <div onClick={handleBoss} className='w-32 h-32 border-4 border-green-400 rounded flex items-center justify-center text-5xl bg-white bg-opacity-30 cursor-pointer hover:bg-opacity-100'>
            BOSS
          </div>}
      </div>
    </div>
  )
}
