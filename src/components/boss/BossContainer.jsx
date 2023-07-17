import bossSVG from '../../assets/Slime03.svg'

export const BossContainer = () => {
  return (
    <div className='div5 outline outline-pink-500'>
      <div className='flex justify-center items-center h-full'>
        <div className='  flex items-center justify-center text-5xl '>
          <img src={bossSVG} alt='' width={250} />
        </div>
      </div>
    </div>

  )
}
