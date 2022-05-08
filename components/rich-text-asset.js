import ContentfulImage from './contentful-image'

export default function RichTextAsset({ id, assets }) {
  const asset = assets?.find((asset) => asset.sys.id === id)

  if (asset?.url) {
    console.log(asset)
    const url = asset.url
    if (url.endsWith('.pdf') || url.endsWith('.mp3')) {
      return <a className="font-bold underline underline-offset-2" href={asset.url}>{asset.description}</a>
    }    
    return (
      <div className="w-full h-[100vw] sm:h-96 relative">
        <ContentfulImage src={asset.url} objectFit="cover" layout="fill" alt={asset.description} />
      </div>
      
    )
  }

  return null
}
