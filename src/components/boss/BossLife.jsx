import health from '../../assets/Corazon.png'
import { storePlayer } from '../../store/storePlayer'
import { diceImage } from '../../utils/utils'

export const BossLife = () => {
  const { boss } = storePlayer()

  return (
    <div className='div4 outline outline-purple-500'>
      <div className='flex justify-around items-center h-full'>
        <div>

          <div className='flex '>
            {
            boss.life > 0 &&
            new Array(boss.life).fill(health).map((hp, i) => <div key={i} className='-ms-10'><img src={hp} alt='' width={80} height={80} /></div>)
          }
          </div>

          <div className='flex '>
            {
            boss.life > 0 &&
            boss.chance.map((x, i) => <div key={i} className=''><img src={diceImage[x]} alt='' width={70} height={70} /></div>)
          }
          </div>

        </div>
        <div />
      </div>
    </div>
  )
}
