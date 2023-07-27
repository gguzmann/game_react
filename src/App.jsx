import { useEffect, useState } from 'react'
import { BoardContainer } from './components/board/BoardContainer'
import { CardsContainer } from './components/cards/CardsContainer'
import { DiceContainer } from './components/dice/DiceContainer'
import { LifeContainer } from './components/life/LifeContainer'
import { PlayerContainerTile } from './components/playerTile/PlayerContainerTile'
import { storePlayer } from './store/storePlayer'
import { randomNum } from './utils/utils'
import { supplies } from './utils/supplies'
import { BossContainer } from './components/boss/BossContainer'
import { BossLife } from './components/boss/BossLife'
import { bosses } from './utils/boss'
import { GameOver } from './components/modals/GameOver'
import { ChoiseCards } from './components/modals/ChoiseCards'
import { monst } from './utils/monster'
import { background } from './utils/backgrounds'
function App () {
  const { dice, diceAtk, life, tile, cards, state, setMonster, level, setBoss, setTile } = storePlayer()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setMonster([])
    const filterMonsterTier = monst.filter(x => x.tier === level)
    const monstersMazo = new Array(9).fill(null).map(x => ({ ...filterMonsterTier[randomNum(filterMonsterTier.length)] }))
    monstersMazo[randomNum(monstersMazo.length)] = supplies[randomNum(supplies.length)]
    monstersMazo[randomNum(monstersMazo.length)] = supplies[randomNum(supplies.length)]
    // mazo[3] = supplies[randomNum(supplies.length)]
    setMonster(monstersMazo)
    setReady(true)
    setBoss({ ...bosses[level] })
    setTile(null)
  }, [level])

  return (
    <>
      {
      life < 1 &&
        <GameOver />
    }
      <ChoiseCards />
      <div><img src={background[level]} alt='' className='absolute -z-10 h-full w-full' /></div>
      {
          ready &&
            <div className='parent min-h-screen bg-opacity-20 bg-white'>
              <LifeContainer />
              <PlayerContainerTile />
              <BoardContainer />
              <BossLife />
              <BossContainer />
              <CardsContainer />
              <DiceContainer />
              <div className='div8 p-5  font-bold'>
                <div className='flex justify-around'>
                  <div>
                    dice: {dice ?? 'null'} <br />
                    tile: {tile ?? 'init'} <br />
                    life: {life} <br />
                    cards: {cards.length} <br />
                    state: {state} <br />
                  </div>
                  <div>
                    dice Atk: {diceAtk ?? 'null'} <br />
                    level: {level} <br />

                  </div>
                </div>
              </div>
            </div>
        }

    </>
  )
}

export default App
