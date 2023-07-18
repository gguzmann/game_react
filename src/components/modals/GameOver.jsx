export const GameOver = () => {
  return (
    <div className='fixed bg-black z-[1050] bg-opacity-90 w-full min h-screen flex justify-center items-center'>
      <div className='text-white border-2 border-white w-full max-w-md  rounded py-8 text-center grid place-content-center'>
        <div className='text-3xl mb-3'>GAME OVER!</div>
        <div>
          <button onClick={() => window.location.reload()} className='px-2 border mt-2 hover:bg-slate-100'>Restart</button>
        </div>
      </div>
    </div>
  )
}
