import { storePlayer } from '../../store/storePlayer'
import { Tile } from './Tile'

export const BoardContainer = () => {
  const { monster } = storePlayer()
  return (
    <div className='div3 outline outline-sky-500 '>
      <div className='h-full w-full grid grid-cols-3 gap-4 place-content-center ps-16'>
        {
            monster.map((x, i) => <Tile key={i} object={x} index={i} />)
        }
      </div>

    </div>
  )
}
