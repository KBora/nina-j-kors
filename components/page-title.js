export default function PageTitle(props) {
  return (
    <h1 className="font-script text-4xl mt-4 sm:mt-16 mb-4 sm:mb-12 px-5 sm:px-0 opac">
      {props.children}
    </h1>
  )
}
