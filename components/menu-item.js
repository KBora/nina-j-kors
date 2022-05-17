export default function MenuItem({ children }) {

  return (
    <div
      className='hover:text-black/50 cursor-pointer overflow-clip uppercase rounded-md text-lg font-bold leading-4'
    >
      {children}
    </div>
  )
}