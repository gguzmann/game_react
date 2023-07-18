import { storePlayer } from '../../store/storePlayer'
import PlayerSVG from '../../assets/Personaje01.svg'
import { useEffect, useState } from 'react'
import { ESTADO, movemente } from '../../utils/utils'

export const TileSupplie = ({ object, index }) => {
  const { dice, setDice, setAttack, attack, setTile, tile, state, setState, monster, setMonster, setLife, life } = storePlayer()
  const [active, setActive] = useState(false)

  useEffect(() => {
    setActive(false)
    if ([ESTADO.MOVE_OR_CARDS, ESTADO.MOVE, ESTADO.ROLL_MOVE].includes(state) && dice) {
      movemente(tile, dice, index, setActive)
    }
  }, [dice, state])

  const handleClick = () => {
    if ([ESTADO.ATTACK, ESTADO.ATTACK_OR_CARDS, ESTADO.MOVE, ESTADO.MOVE_OR_CARDS].includes(state) && active) {
      if (state === ESTADO.MOVE_OR_CARDS || state === ESTADO.MOVE) {
        active && setTile(index)
        setMonster(monster.map((x, i) => { return index === i ? '' : x }))
        if (object.name === 'Life') setLife(life + 1)
        if (object.name === 'Attack') setAttack(attack + 1)
        if (tile === 2 || tile === 5 || tile === 8) {
          setState(ESTADO.BOSS_MOVE)
        } else {
          setState(ESTADO.ROLL_MOVE)
        }
      }
      setDice(null)
    }
  }
  return (
    <div onClick={handleClick} className={`w-32 h-32 border-4 rounded flex items-center justify-center text-5xl ${active && 'border-yellow-600 cursor-pointer'}`}>
      {
        tile === index && <img src={PlayerSVG} alt='' width={150} />

      }
      <img src={object.img} alt='' />
      <div className='absolute'>
        <div className='relative top-10 left-12 text-white'>{}</div>
      </div>
    </div>
  )
}
