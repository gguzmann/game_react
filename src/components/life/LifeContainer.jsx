import health from '../../assets/Corazon.png'
import { storePlayer } from '../../store/storePlayer'
export const LifeContainer = () => {
  const { life, attack } = storePlayer()
  return (
    <div className='div1'>
      <div className='flex justify-around items-center h-full'>
        <div>

          <div className='flex '>
            {
            life > 0 &&
            new Array(life).fill(health).map((hp, i) => <div key={i} className='-ms-10'><img src={hp} alt='' width={80} height={80} /></div>)
          }
          </div>

          <div className='flex '>
            {
            new Array(attack).fill(health).map((hp, i) => <div key={i} className='-ms-10'><img src='https://cdn2.iconfinder.com/data/icons/gaming-solid/32/sword_battle_rpg_weapon_attack_game-512.png' alt='' width={80} height={80} /></div>)
          }
          </div>

        </div>
        <div />
      </div>
    </div>
  )
}
