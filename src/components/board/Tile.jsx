import { useEffect, useState } from 'react'
import { storePlayer } from '../../store/storePlayer'
import PlayerSVG from '../../assets/Personaje01.svg'
import { ESTADO, delay, movemente } from '../../utils/utils'

export const Tile = ({ object, index }) => {
  const { dice, setDice, diceAtk, setDiceAtk, setTile, tile, state, setState, monster, setMonster, setLife, life } = storePlayer()
  const [active, setActive] = useState(false)
  const [event, setEvent] = useState(false)
  const [hp, setHp] = useState(0)
  const [effectMonster, setEffectMonster] = useState(false)
  const [effectPlayer, setEffectPlayer] = useState(false)

  useEffect(() => {
    setHp(object.life)
    setActive(false)
    setEvent(false)
    if ([ESTADO.MOVE_OR_CARDS, ESTADO.MOVE, ESTADO.ROLL_MOVE].includes(state) && dice) {
      movemente(tile, dice, index, setActive)
    }
    if ([ESTADO.ATTACK, ESTADO.ATTACK_OR_CARDS].includes(state)) {
      if (tile === index) setEvent(true)
    }
  }, [dice, diceAtk, state])

  const handleClick = async () => {
    if ([ESTADO.ATTACK, ESTADO.ATTACK_OR_CARDS, ESTADO.MOVE, ESTADO.MOVE_OR_CARDS].includes(state) && (active || event)) {
      if (state === ESTADO.MOVE_OR_CARDS || state === ESTADO.MOVE) {
        active && setTile(index)
        setState(ESTADO.ROLL_ATTACK)
      }
      if (state === ESTADO.ATTACK || state === ESTADO.ATTACK_OR_CARDS) {
        // SI MONSTER =< 0
        object.life = object.life - diceAtk
        setEffectMonster(true)
        setHp(object.life)
        await delay(1)
        if (object.life < 1) {
          setMonster(monster.map((x, i) => { return index === i ? '' : x }))
          if (tile === 2 || tile === 5 || tile === 8) {
            setState(ESTADO.BOSS_MOVE)
          } else {
            setState(ESTADO.ROLL_MOVE)
          }
        } else {
          setEffectPlayer(true)
          await delay(1)
          setLife(life - object.attack)
          setState(ESTADO.ROLL_ATTACK)
        }
        console.log('life2:', life)
      }
      setEffectMonster(false)
      setEffectPlayer(false)
      setDiceAtk(null)
      setDice(null)
    }
  }

  return (
    <div onClick={handleClick} className={` w-32 h-32 border-4 rounded flex items-center justify-center text-5xl ${event && 'border-red-600 cursor-pointer'} ${active && 'border-yellow-600 cursor-pointer'}`}>
      {
        tile === index && <img className={`${effectPlayer && 'animate__animated animate__flash'}`} src={PlayerSVG} alt='' width={150} />

      }
      <img className={`${effectMonster && 'animate__animated animate__flash'}`} src={object.img} alt='' />
      <div className='absolute'>

        <div className='relative top-12 left-12 text-white text-2xl'>{hp > 0 && object.life}</div>
      </div>
    </div>
  )
}
