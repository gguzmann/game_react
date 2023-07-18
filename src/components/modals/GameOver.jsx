export const GameOver = () => {
  return (
    <div className='fixed bg-black z-[1050] bg-opacity-80 w-full min h-screen flex justify-center items-center'>
      <div className='bg-white w-full max-w-xs rounded p-8 text-center'>
        GAME OVER!
        <div>
          <button onClick={() => window.location.reload()} className='px-2 border mt-2 hover:bg-slate-100'>Restart</button>
        </div>
      </div>
    </div>
  )
}
