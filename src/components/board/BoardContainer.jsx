import { storePlayer } from '../../store/storePlayer'
import { Tile } from './Tile'
import { TileSupplie } from './TileSupplie'

export const BoardContainer = () => {
  const { monster } = storePlayer()
  return (
    <div className='div3'>
      <div className='h-full w-full grid grid-cols-3 gap-4 place-content-end ps-16'>
        {
          monster.map((x, i) => x.type === 'monster' ? <Tile key={i} object={x} index={i} /> : <TileSupplie key={i} object={x} index={i} />)
        }
      </div>

    </div>
  )
}
