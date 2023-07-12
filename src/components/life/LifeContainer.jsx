import health from '../../assets/Corazon.png'
import { storePlayer } from '../../store/storePlayer'
export const LifeContainer = () => {
  const { life } = storePlayer()
  return (
    <div className='div1 outline outline-green-500'>
      <div className='flex justify-around items-center h-full'>
        <div className='flex '>

          {
            new Array(life).fill(health).map((hp, i) => <div key={i} className='-ms-10'><img src={hp} alt='' width={80} height={80} /></div>)
          }
        </div>
        <div />
      </div>
    </div>
  )
}
