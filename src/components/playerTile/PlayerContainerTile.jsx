import PlayerSVG from '../../assets/Personaje01.svg'
import { storePlayer } from '../../store/storePlayer'
export const PlayerContainerTile = () => {
  const { tile } = storePlayer()
  return (
    <div className='div2'>
      <div className='flex justify-center items-center h-full'>
        <div className='  flex items-center justify-center text-5xl '>
          {tile === null && <img src={PlayerSVG} alt='' width={250} />}
        </div>
      </div>
    </div>
  )
}
