import { useEffect, useState } from 'react'
import { storePlayer } from '../../store/storePlayer'
import PlayerSVG from '../../assets/Personaje01.svg'
import { ESTADO, movemente } from '../../utils/utils'

export const Tile = ({ object, index }) => {
  const { dice, setDice, setTile, tile, state, setState, monster, setMonster } = storePlayer()
  const [active, setActive] = useState(false)

  useEffect(() => {
    setActive(false)
    if (state === ESTADO.MOVE_OR_CARDS || state === ESTADO.MOVE || state === ESTADO.ROLL) {
      movemente(tile, dice, index, setActive)
    }
  }, [dice])

  const handleMove = () => {
    if (state === ESTADO.MOVE_OR_CARDS || state === ESTADO.MOVE) {
      active && setTile(index)
      setState(ESTADO.ATTACK)
    }
    if (state === ESTADO.EVENT) {
      setMonster(monster.map((x, i) => { return index === i ? '' : x }
      ))
      setState(ESTADO.ROLL)
    }
    setDice(null)
  }

  return (
    <div onClick={handleMove} className={`w-32 h-32 border-4 rounded flex items-center justify-center text-5xl ${active && 'border-yellow-600 cursor-pointer'}`}>
      {
        tile === index && <img src={PlayerSVG} alt='' width={150} />

      }
      <img src={object.img} alt='' />
    </div>
  )
}
