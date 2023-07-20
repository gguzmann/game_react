import { ESTADO, delay, diceImage, randomNum } from '../../utils/utils'
import { storePlayer } from '../../store/storePlayer'

export const DiceMove = () => {
  const { setDice, dice, state, setState } = storePlayer()

  const handleRoll = async () => {
    if (state !== ESTADO.ROLL_MOVE) return
    let num = 0
    for (let index = 0; index < 15; index++) {
      await delay(0.1)
      num = randomNum(6) + 1
      setDice(num)
    }
    setState(ESTADO.MOVE_OR_CARDS)
  }
  return (
    <div onClick={handleRoll} className='w-32 h-32 border-4 rounded flex items-center justify-center text-5xl bg-white bg-opacity-30 cursor-pointer hover:bg-opacity-100'>
      {
        dice ? <img src={diceImage[dice]} alt='' /> : 'Roll'
         }

    </div>
  )
}
