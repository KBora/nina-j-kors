import Link from 'next/link'
import Avatar from '../components/avatar'
import DateComponent from '../components/date'
import CoverImage from './cover-image'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-4">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <div className="px-5 sm:px-0">
        <h3 className="text-3xl mb-1 leading-snug font-bold">
          <Link href={`/posts/${slug}`}>
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>      
        <div className="text-sm mb-4">
          <DateComponent dateString={date} />
        </div>
      </div>
    </div>
  )
}
