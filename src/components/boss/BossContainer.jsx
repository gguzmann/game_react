import bossSVG from '../../assets/Slime03.svg'
import PlayerSVG from '../../assets/Personaje01.svg'
import { storePlayer } from '../../store/storePlayer'
import { ESTADO } from '../../utils/utils'

export const BossContainer = () => {
  const { state } = storePlayer()

  return (
    <div className='div5 outline outline-pink-500'>
      <div className='flex justify-center items-center h-full'>
        <div className='  flex items-center justify-center text-5xl '>
          {state === ESTADO.BOSS_ATTACK && <img src={PlayerSVG} alt='' width={150} />}
          <img src={bossSVG} alt='' width={250} />
        </div>
      </div>
    </div>

  )
}
