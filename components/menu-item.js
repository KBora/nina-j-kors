export default function MenuItem({ children }) {

  return (
    <div
      className='text-black hover:text-black/50 cursor-pointer overflow-clip uppercase rounded-md text-lg font-bold leading-4'
    >
      {children}
    </div>
  )
}