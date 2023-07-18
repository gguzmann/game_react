import { supplies } from '../../utils/supplies'
import { ESTADO, randomNum } from '../../utils/utils'
import { storePlayer } from '../../store/storePlayer'

export const ChoiseCards = () => {
  const { state, setState, setLevel, level } = storePlayer()
  const handleClick = () => {
    setState(ESTADO.ROLL_MOVE)
    setLevel(level + 1)
  }
  return (
    <div className={`fixed bg-black z-[1050] bg-opacity-90 w-full min h-screen flex justify-center items-center ${state !== ESTADO.CHOISE_CARD && 'hidden'}`}>
      <div className='text-white border-2 border-white w-full max-w-md  rounded py-8 text-center grid place-content-center'>
        <div className='text-3xl mb-3'>CHOISE ONE CARD:</div>
        <div className='flex justify-between'>
          {
            new Array(3).fill('').map((card, i) => <button onClick={handleClick} key={i} className='border p-3 rounded hover:bg-white hover:bg-opacity-20 hover:border-yellow-500'><img src={supplies[randomNum(supplies.length)].img} width={50} alt='' /></button>)
          }
        </div>
      </div>
    </div>
  )
}
