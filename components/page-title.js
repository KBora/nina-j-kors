export default function PageTitle(props) {
  return (
    <h1 className="text-4xl text-zinc-600 font-bold uppercase mt-4 sm:mt-16 mb-4 sm:mb-16 px-5 sm:px-0 opac">
      {props.children}
    </h1>
  )
}
