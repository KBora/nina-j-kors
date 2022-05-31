import Alert from './alert'
import Meta from './meta'

export default function LayoutHome({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        { preview && 
          <Alert preview={preview} />
        }        
        <main>{children}</main>
      </div>
    </>
  )
}
