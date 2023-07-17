import { ESTADO, delay, randomNum } from '../../utils/utils'
import { storePlayer } from '../../store/storePlayer'

export const DiceAttack = () => {
  const { setDiceAtk, diceAtk, state, setState, attack } = storePlayer()

  const handleRoll = async () => {
    if (state !== ESTADO.ROLL_ATTACK) return
    let num = 0
    for (let index = 0; index < 15; index++) {
      await delay(0.1)
      num = randomNum(attack) + 1
      setDiceAtk(num)
    }
    setState(ESTADO.ATTACK_OR_CARDS)
  }
  return (
    <div onClick={handleRoll} className='w-32 h-32 border-4 border-sky-600 rounded flex items-center justify-center text-5xl bg-white bg-opacity-30 cursor-pointer hover:bg-opacity-100'>
      {
        diceAtk || 'Attack'
         }
    </div>
  )
}
