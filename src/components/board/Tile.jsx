import { useEffect, useState } from 'react'
import { storePlayer } from '../../store/storePlayer'
import PlayerSVG from '../../assets/Personaje01.svg'
import { ESTADO, movemente } from '../../utils/utils'

export const Tile = ({ object, index }) => {
  const { dice, setDice, diceAtk, setDiceAtk, setTile, tile, state, setState, monster, setMonster } = storePlayer()
  const [active, setActive] = useState(false)
  const [event, setEvent] = useState(false)

  useEffect(() => {
    setActive(false)
    setEvent(false)
    if ([ESTADO.MOVE_OR_CARDS, ESTADO.MOVE, ESTADO.ROLL_MOVE].includes(state) && dice) {
      movemente(tile, dice, index, setActive)
    }
    if ([ESTADO.ATTACK, ESTADO.ATTACK_OR_CARDS].includes(state)) {
      if (tile === index) setEvent(true)
    }
  }, [dice, diceAtk])

  const handleClick = () => {
    if ([ESTADO.ATTACK, ESTADO.ATTACK_OR_CARDS, ESTADO.MOVE, ESTADO.MOVE_OR_CARDS].includes(state) && (active || event)) {
      if (state === ESTADO.MOVE_OR_CARDS || state === ESTADO.MOVE) {
        active && setTile(index)
        setState(ESTADO.ROLL_ATTACK)
      }
      if (state === ESTADO.ATTACK || state === ESTADO.ATTACK_OR_CARDS) {
        console.log(object.life)
        // SI MONSTER =< 0
        monster[index].life = monster[index].life - diceAtk
        if (monster[index].life < 0) {
          setMonster(monster.map((x, i) => { return index === i ? '' : x }))
          setState(ESTADO.ROLL_MOVE)
        } else {
          setState(ESTADO.ROLL_ATTACK)
        }
      }
      setDiceAtk(null)
      setDice(null)
    }
  }

  return (
    <div onClick={handleClick} className={`w-32 h-32 border-4 rounded flex items-center justify-center text-5xl ${event && 'border-red-600 cursor-pointer'} ${active && 'border-yellow-600 cursor-pointer'}`}>
      {
        tile === index && <img src={PlayerSVG} alt='' width={150} />

      }
      <img src={object.img} alt='' />
      <div className='absolute'>
        <div className='relative top-10 left-12 text-white'>{monster[index].life}</div>
      </div>
    </div>
  )
}
