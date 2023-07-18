import { useEffect, useState } from 'react'
import PlayerSVG from '../../assets/Personaje01.svg'
import { storePlayer } from '../../store/storePlayer'
import { ESTADO, delay } from '../../utils/utils'

export const BossContainer = () => {
  const { tile, state, dice, life, setLife, setState, setDice, boss, setBoss } = storePlayer()
  const [atk, setAtk] = useState(false)
  const [effectMonster, setEffectMonster] = useState(false)
  const [effectPlayer, setEffectPlayer] = useState(false)
  console.log('boss component')
  useEffect(() => {
    setAtk(false)
    if ((state === ESTADO.MOVE || state === ESTADO.MOVE_OR_CARDS) && tile === 10) { setAtk(true) }
  }, [tile, state])

  const handleClick = async () => {
    if (tile !== 10) return
    if (state === ESTADO.MOVE || state === ESTADO.MOVE_OR_CARDS) {
      if (boss.chance.includes(dice)) {
        const bossLife = boss.life - 1
        setBoss({
          ...boss,
          life: bossLife
        })
        setEffectMonster(true)
        await delay(1)
        console.log(bossLife)
        if (bossLife < 1) {
          setBoss({})
          setState(ESTADO.CHOISE_CARD)
        } else {
          setEffectPlayer(true)
          await delay(1)
          setLife(life - boss.attack)
          setState(ESTADO.ROLL_MOVE)
        }
      } else {
        setEffectPlayer(true)
        await delay(1)
        setLife(life - boss.attack)
        setState(ESTADO.ROLL_MOVE)
      }
      setEffectMonster(false)
      setEffectPlayer(false)
      setDice(null)
    }

    console.log('boss')
  }

  return (
    <div className='div5 outline outline-pink-500'>
      <div className='flex justify-center items-center h-full'>
        {tile === 10 && <img className={`${effectPlayer && 'animate__animated animate__flash'}`} src={PlayerSVG} alt='' width={150} />}
        <div onClick={handleClick} className={`${atk && 'border-4 border-red-600 bg-opacity-30 cursor-pointer'} flex items-center justify-center text-5xl`}>
          <img className={`${effectMonster && 'animate__animated animate__flash'}`} src={boss.img} alt='' width={250} />
        </div>
      </div>
    </div>

  )
}
