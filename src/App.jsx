import fondo from './assets/NuevoFondo01.png'
import { BoardContainer } from './components/board/BoardContainer'
import { CardsContainer } from './components/cards/CardsContainer'
import { DiceContainer } from './components/dice/DiceContainer'
import { LifeContainer } from './components/life/LifeContainer'
import { PlayerContainerTile } from './components/playerTile/PlayerContainerTile'
import { storePlayer } from './store/storePlayer'
function App () {
  const { dice, diceAtk, life, tile, cards, state } = storePlayer()
  return (
    <>
      <div><img src={fondo} alt='' className='absolute -z-10 h-full w-full' /></div>
      <div className='parent min-h-screen bg-opacity-20 bg-white'>

        <LifeContainer />
        <PlayerContainerTile />
        <BoardContainer />
        <div className='div4 outline outline-purple-500'> life boss</div>
        <div className='div5 outline outline-pink-500'> boss</div>
        <CardsContainer />
        <DiceContainer />
        <div className='div8 outline outline-fuchsia-500 p-5  font-bold'>
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
